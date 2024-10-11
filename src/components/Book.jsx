import axios from "axios";
import List, { BASE_URL } from "../assets/constants";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 12;
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

    // Get the books to display for the current page
    const booksToDisplay = books.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(books.length / booksPerPage);

    // Handle delete operation
    const handleDelete = async (bookId) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${BASE_URL}/books/${bookId}`);
                Swal.fire('Deleted!', 'Your book has been deleted.', 'success'); // Show success message
                getBooks(); // Refresh the book list after deletion
            } catch (error) {
                Swal.fire('Error!', 'There was an error deleting the book.', 'error');
            }
        }
    };

    return (
        <>
           {/* Books Grid */}
           <div className="grid grid-cols-4 w-[80%] mx-auto mb-40 gap-12 mt-[10%]">
               {booksToDisplay.map((book, index) => (
                   <div key={index} className="flex flex-col justify-start rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                       
                       {/* Book Image */}
                       <div className="w-full h-64 overflow-hidden rounded-t-lg">
                           <Link to={`/single/${book.id}`}>
                               <img
                                   className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                                   src={book.img_url}
                                   alt={book.title}
                               />
                           </Link>
                       </div>

                       {/* Book Details */}
                       <div className="p-4 flex flex-col items-center">
                           <span className="text-2xl text-center mt-2">{book.title}</span>
                           <h1 className="text-center font-bold text-lg mt-1">{book.author}</h1>
                           <h1 className="text-center text-gray-500 mt-1">{book.genre}</h1>
                           <p className="text-center text-gray-700 mt-2">{book.description}</p>
                           <h1 className="text-center text-gray-500 mt-1">{book.publisher}</h1>
                           <h1 className="text-center text-gray-500 mt-1">{book.year}</h1>
                       </div>

                       {/* Edit and Delete Links */}
                       <div className="flex justify-center gap-x-4 mt-4 mb-2">
                           <Link to={`/editform/${book.id}`} 
                               className="text-blue-500 hover:text-blue-700 transition-colors">
                               Edit
                           </Link>
                           <button
                               onClick={() => handleDelete(book.id)}
                               className="text-red-500 hover:text-red-700 transition-colors"
                           >
                               Delete
                           </button>
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

export default Book;
