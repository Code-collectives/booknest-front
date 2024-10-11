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
               <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
  {/* Image Section */}
  <div className="lg:w-1/2">
    <img src={book.img_url} alt={book.title} className="w-full rounded-md shadow-md" />
  </div>

  {/* Book Details Section */}
  <div className="lg:w-1/2">
    <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
    <div className="mt-2 flex items-center">
   </div>

    <p className="mt-4 text-gray-700">{book.description}</p>
    
    <div className="mt-6 space-y-2 text-gray-600">
      <p><strong>Author:</strong> {book.author.name}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Year:</strong> {book.year}</p>
    </div>

   
  </div>
</div>

                </>
            ) : (
                <p>Book not found</p>
            )}
        </div>
    );
};

export default BookDetails;
