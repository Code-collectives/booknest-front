import { FaHeart } from "react-icons/fa";
import List from "../assets/constants";
import { Link } from "react-router-dom";

import React, { useState } from 'react';

const Journal = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 5;

    // Calculate the start and end index of the books to display
    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = List.BOOKS.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(List.BOOKS.length / booksPerPage);

    return (
        <>
            <div className="grid grid-cols-1 w-[80%] mx-auto mb-40 gap-12 mt-[15%]">
                {booksToDisplay.map((book, index) => {
                    return (
                        <div key={index} className="flex border rounded-lg shadow-lg p-6 w-[100%] gap-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
                           import { Link } from 'react-router-dom';

<Link to={`/Single/${book.id}`} className="w-1/2">
    <img
        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        src={book.img}
        alt={book.title}
    />
</Link>


                            <div className="w-1/2 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-3xl font-semibold">{book.title}</h1>
                                    <p className="text-lg font-semibold text-gray-800 mt-3">${book.price}</p>
                                    <p className="text-gray-600 mt-3">{book.description}</p>

                                    <div className="mt-3">
                                        <h1 className="text-md font-medium">Review: {book.review}</h1>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start gap-4 mt-4">
                                    <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300">
                                        EDIT
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                                        <FaHeart />
                                    </button>
                                    <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300">
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
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

