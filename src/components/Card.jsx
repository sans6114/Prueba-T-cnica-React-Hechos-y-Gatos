import { Quote } from './Quote';

export const Card = ({ img, quote }) => {
    return (
        <article
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-3/4 mx-auto"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-96 md:rounded-none md:rounded-s-lg"
                src={img}
                alt={`Cat with message: "${quote || 'No message available'}"`}
            />
            <div className='flex justify-center items-center p-10 w-full'>

                <Quote quote={quote} />
            </div>
        </article>
    );
};

