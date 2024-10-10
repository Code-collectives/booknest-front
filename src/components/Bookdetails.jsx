import { CiSearch } from "react-icons/ci";
import CardWrapper from "./CardWrapper";
import Book from "./Book";
import Journal from "./Journals";
import Feature from "./Feature";



function Bookdetails() {
  return (
    <div>
    <div className="bg-[#755139ff] h-[90vh] header">

    <div className="relative row1">

  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  
  <div className="relative z-20 row3">
    <h1 className="text-4xl font-thin text-gray-100">
      A room without books is like <br /> a body without a soul.
    </h1>
  </div>
</div>



<div className="row2">
  <h2 className="text-2xl font-bold mb-4 text-yellow-300">Find Your Book</h2>
  <div className="flex items-center space-x-4">
    <input
      type="text"
      placeholder="Enter your book"
      className="w-full max-w-sm px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button className="px-4 py-2 bg-yellow-300 text-white rounded-md hover:bg-yellow-700">
      <CiSearch />
    </button>
  </div>

</div>
</div>
<Feature />
<Journal />




</div>

  
  
  )
}

export default Bookdetails
