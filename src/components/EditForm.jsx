import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const EditForm = () => {
    const { id } = useParams(); // Use useParams to extract id
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        description: '',
        publisher: '',
        year: '',
    });

    // Fetch the book details for the given id
    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`${BASE_URL}/books/${id}`);
            setBook(response.data);
        };

        fetchBook();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${BASE_URL}/books/${id}`, book);
        // Optionally redirect or display a success message
        setSuccessMessage('Book updated successfully!');
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    return (
        <div className='edit'>
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Edit Book</h1>
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg">
    <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            required
            placeholder="Enter book title"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700">Author</label>
        <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            required
            placeholder="Enter author's name"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700">Genre</label>
        <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            placeholder="Enter book genre"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            placeholder="Enter book description"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700">Publisher</label>
        <input
            type="text"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            placeholder="Enter publisher's name"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700">Year</label>
        <input
            type="text"
            name="year"
            value={book.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-transparent placeholder-gray-500"
            placeholder="Enter publication year"
        />
    </div>
    <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
        Save Changes
    </button>
</form>

        </div>
        </div>
    );
};

export default EditForm;
