import {
  useEffect,
  useState,
} from 'react';

export const useFetchHook = (url) => {
    const [urlImage, setUrlImage] = useState('')
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })
    const { data, isLoading } = state

    useEffect(() => {
        fetchUrl()
    }, [])

    useEffect(() => {
        if (data) {
            fetchImage();
        }
    }, [data]);


    const fetchImage = async () => {

        try {
            const res = await fetch(`https://cataas.com/cat/says/${data}`)
            if (!res.ok) {
                console.error('Error fetching image:', res.statusText);
            }
            setUrlImage(res.url)
        } catch (error) {
            console.error('Fetch error:', error);
        }

    }
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
        })
    }
    const fetchUrl = async () => {
        try {
            setLoadingState()
            const res = await fetch(url)
            await new Promise(resolve => setTimeout(resolve, 1000))
            if (!res.ok) {
                setState({
                    data: null,
                    isLoading: false,
                })
            }
            const data = await res.json()
            console.log(data.fact)
            // Divide el hecho en un array de palabras y toma las primeras 3
            const words = data.fact.split(' ', 3).join(' ')
            console.log(words)
            setState({
                data: words,
                isLoading: false,
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
            });
        }
    }



    return {
        data,
        isLoading,
        urlImage
    }
}