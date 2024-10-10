import List from "../assets/constants";

import React, { useState } from 'react';

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 8;

 
    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = List.BOOKS.slice(startIndex, endIndex);

    
    const totalPages = Math.ceil(List.BOOKS.length / booksPerPage);

    return (
        <>
            <div className="grid grid-cols-4 w-[80%] mx-auto mb-40 gap-12 mt-[10%]">
                {booksToDisplay.map((book, index) => {
                    return (
                        <div key={index} className="">
                            <div className="flex flex-col gap-y-2 w-[100%] h-[100%] justify-center rounded-lg box-border shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div>
                                    <img
                                        className="w-[100%] h-[120%] transition-opacity duration-300 hover:opacity-90"
                                        src={book.img}
                                        alt={book.title} 
                                    />
                                </div>
                                <span className="text-2xl text-center mt-5">{book.author}</span>
                                <h1 className="text-center">{book.title}</h1>
                                <h1 className="text-center">{book.review}</h1>
                                <p className="text-center">{book.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
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

  
  
  export default Book
  