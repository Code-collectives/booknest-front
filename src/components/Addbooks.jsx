import React from 'react'
import { Link } from 'react-router-dom';

function Addbooks() {
  return (
    <div>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 mt-10">
  <h2 className="text-2xl font-bold text-center mb-6">Add Book Form</h2>
  <div>
    <label htmlFor="title" className="block text-lg font-semibold text-gray-700">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Enter the book title"
      required
    />
  </div>
  <div>
    <label htmlFor="author" className="block text-lg font-semibold text-gray-700">
      Author
    </label>
    <input
      type="text"
      id="author"
      name="author"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Enter the author's name"
      required
    />
  </div>
  <div>
    <label htmlFor="subject-keyword" className="block text-lg font-semibold text-gray-700">
      Subject Keyword
    </label>
    <input
      type="text"
      id="subject-keyword"
      name="subject-keyword"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Enter relevant keywords"
      required
    />
  </div>


  <div>
    <label htmlFor="genre" className="block text-lg font-semibold text-gray-700">
      Genre
    </label>
    <select
      id="genre"
      name="genre"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      required
    >
      <option value="" disabled selected>
        Select genre
      </option>
      <option value="fiction">Fiction</option>
      <option value="non-fiction">Non-Fiction</option>
      <option value="mystery">Mystery</option>
      <option value="fantasy">Fantasy</option>
      <option value="romance">Romance</option>
      <option value="science-fiction">Science Fiction</option>
      <option value="biography">Biography</option>
      <option value="other">Other</option>
    </select>
  </div>

  
  <div>
    <label htmlFor="description" className="block text-lg font-semibold text-gray-700">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      rows="4"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Enter a brief description of the book"
      required
    />
  </div>

  
  <div>
    <label htmlFor="publisher-date" className="block text-lg font-semibold text-gray-700">
      Publisher Date
    </label>
    <input
      type="date"
      id="publisher-date"
      name="publisher-date"
      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      required
    />
  </div>

  
  <div className="text-center">
  <Link
    to="/viewlist" 
    className="px-6 py-3 bg-yellow-400 text-white rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
  >
    Submit
  </Link>
</div>
</form>

    </div>
  )
}

export default Addbooks
