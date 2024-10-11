import { FaHeart } from "react-icons/fa";
import List, { BASE_URL } from "../assets/constants";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'; 


const Journal = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 5;
    const [books, setBooks] = useState([]);
    const navigate= useNavigate(); // Use useHistory for navigation

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

    // Handle edit operation
    const handleEdit = (book) => {
        history.push(`/edit/${book.id}`); // Redirect to edit page
    };

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
                                <p className="text-lg font-semibold text-gray-800 mt-3">{book.author.name}</p>
                                <p className="text-gray-600 mt-3">{book.genre}</p>
                                <div className="mt-3">
                                    <h1 className="text-md font-medium">{book.description}</h1>
                                </div>
                                <p className="text-gray-600 mt-3">{book.publisher}</p>
                                <p className="text-gray-600 mt-3">{book.year}</p>
                            </div>

                            <div className="flex items-center justify-start gap-4 mt-4">
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

export default Journal;
