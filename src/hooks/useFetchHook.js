import {
  useEffect,
  useState,
} from 'react';

//URLS
const URL_FACTS = 'https://catfact.ninja/fact'
const URL_IMAGE = 'https://cataas.com/cat/says/'
export const useFetchHook = () => {


    const [fact, setFact] = useState(null)
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {

        const fetchUrl = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(URL_FACTS)
                const factData = await res.json()
                setFact(factData.fact)

                //my first tree words
                const words = factData.fact.split(' ', 3).join(' ')
                const imageUrl = `${URL_IMAGE}${encodeURIComponent(words)}`
                setImage(imageUrl)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUrl()
    }, [])


    return {
        fact,
        image,
        isLoading
    }
}