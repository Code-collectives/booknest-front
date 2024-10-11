import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // For fetching URL parameters
import { BASE_URL } from '../../assets/constants';

const BookDetails = () => {
    const { bookid } = useParams(); // Get the book ID from the URL parameters
    const [book, setBook] = useState(null); // State to hold the book data
    const [modelOpen, setModelOpen] = useState(false);
    const[formData, setFormData] =useState(false)
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/books/${bookid}`); // Make API call
                setBook(response.data); // Set the book data
            } catch (err) {
                setError(err.message); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchBook(); // Call the fetch function
    }, []); // Re-run effect if ID changes

    // Loading state
    if (loading) return <div>Loading...</div>;

    // Error state
    if (error) return <div>Error: {error}</div>;

    // Render book details
    return (
        <div className="max-w-md mx-auto p-4">
            {book ? (
                <>
                    <h1 className="text-2xl font-bold">{book.title}</h1>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Year:</strong> {book.year}</p>
                </>
            ) : (
                <p>Book not found</p>
            )}
        </div>
    );
};

export default BookDetails;
