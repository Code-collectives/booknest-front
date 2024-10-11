import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../assets/constants';
const NonFiction = () => {
    const [books, setBooks] = useState([]);

    // Fetch books from API and limit to the middle 4 books
    const getBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books`);
        const allBooks = response.data;

        // Calculate the middle index
        const midIndex = Math.floor(allBooks.length / 2);
        // Slice to get the middle 4 books
        const middleFourBooks = allBooks.slice(midIndex - 2, midIndex + 2);

        setBooks(middleFourBooks);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>

        <div className="mt-10 mb-5 w-[80%] mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 text-left">Fiction</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto mb-40 gap-12 mt-[5%]">
            {books.map((book, index) => (
                <div key={index} className="flex flex-col justify-start rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="w-full h-64 overflow-hidden rounded-t-lg">
                        <img
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                            src={book.img_url}
                            alt={book.title}
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center">
                        <span className="text-2xl text-center font-semibold mt-2">{book.title}</span>
                        <h1 className="text-center font-bold text-lg mt-1">{book.author.name}</h1>
                        <h1 className="text-center text-gray-500 mt-1">{book.genre}</h1>
                        <p className="text-center text-gray-700 mt-2">{book.description}</p>
                        <h1 className="text-center text-gray-500 mt-1">{book.publisher}</h1>
                        <h1 className="text-center text-gray-500 mt-1">{book.year}</h1>
                    </div>
                </div>
            ))}
        </div>
    </>
);
};








export default NonFiction