import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Optional: To show alerts
import { BASE_URL } from '../assets/constants';


const EditForm = () => {
    const { id } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate(); // To redirect after edit
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        genre: '',
        description: '',
        publisher: '',
        year: '',
        img_url: ''
    });
    const [loading, setLoading] = useState(true);

    // Fetch the book details by ID
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/books/${id}`);
                setBookData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the book data', error);
                Swal.fire('Error!', 'Unable to fetch the book data.', 'error');
            }
        };
        fetchBook();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending a PATCH request to update the book data
            await axios.patch(`${BASE_URL}/books/${id}`, bookData);
            Swal.fire('Success!', 'Book details have been updated.', 'success');
            navigate('/viewlist'); // Redirect to homepage or book list after successful edit
        } catch (error) {
            Swal.fire('Error!', 'Failed to update the book details.', 'error');
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching data
    }

    return (
       
      
        <div className='edit'>
        <div className="max-w-md mx-auto mt-10 ">
            <h1 className="text-2xl font-bold mb-6">Edit Book</h1>
            <form onSubmit={handleSubmit}>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
                type="text"
                name="title"
                value={bookData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Author */}
        <div className="mb-4">
            <label className="block text-gray-700">Author</label>
            <input
                type="text"
                name="author"
                value={bookData.author.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Genre */}
        <div className="mb-4">
            <label className="block text-gray-700">Genre</label>
            <input
                type="text"
                name="genre"
                value={bookData.genre}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Description */}
        <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
                name="description"
                value={bookData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Publisher */}
        <div className="mb-4">
            <label className="block text-gray-700">Publisher</label>
            <input
                type="text"
                name="publisher"
                value={bookData.publisher}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Year */}
        <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <input
                type="number"
                name="year"
                value={bookData.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Image URL */}
        <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
                type="text"
                name="img_url"
                value={bookData.img_url}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            />
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-colors"
        >
            Update Book
        </button>
    </div>
</form>

        </div>
        </div>
       
    );
};

export default EditForm;
