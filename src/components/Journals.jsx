import { FaHeart } from "react-icons/fa";
import List, { BASE_URL } from "../assets/constants";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import axios from "axios";

const Journal = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 5;
    const [books, setBooks] = useState([]);

    // Fetch books from API
    const getBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books`);
        setBooks(response.data);
    };

    useEffect(() => {
        getBooks();
    }, []);

    // Calculate the start and end index of the books to display
    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = books.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(books.length / booksPerPage);

    return (
        <>
            {/* Books Grid */}
            <div className="grid grid-cols-1 w-[80%] mx-auto mb-40 gap-12 mt-[15%]">
                {booksToDisplay.map((book, index) => (
                    <div key={index} className="flex border rounded-lg shadow-lg p-6 w-[100%] gap-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
                        
                        <Link to={`/single/${book.id}`} className="w-1/2">
                            <img
                                className="w-full max-h-64 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                src={book.img_url}
                                alt={book.title}
                            />
                        </Link>

                        <div className="w-1/2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-semibold">{book.title}</h1>
                                <p className="text-lg font-semibold text-gray-800 mt-3">{book.author}</p>
                                <p className="text-gray-600 mt-3">{book.genre}</p>
                                <div className="mt-3">
                                    <h1 className="text-md font-medium">{book.description}</h1>
                                </div>
                                <p className="text-gray-600 mt-3">{book.publisher}</p>
                                <p className="text-gray-600 mt-3">{book.year}</p>
                            </div>

                            <div className="flex items-center justify-start gap-4 mt-4">
                           <button
                               onClick={() => handleEdit(book)}
                               className="text-blue-500 hover:text-blue-700 transition-colors"
                           >
                               Edit
                           </button>
                           <button
                               onClick={() => handleDelete(book.id)}
                               className="text-red-500 hover:text-red-700 transition-colors"
                           >
                               Delete
                           </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                    className={`py-2 px-4 rounded-md ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800 transition-colors duration-300'}`}
                >
                    Previous
                </button>
                <span>Page {currentPage + 1} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage === totalPages - 1}
                    className={`py-2 px-4 rounded-md ${currentPage === totalPages - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800 transition-colors duration-300'}`}
                >
                    Next
                </button>
            </div>
        </>
    );
};


  
  
 export  default Journal 

