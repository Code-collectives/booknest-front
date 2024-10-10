
import { HiOutlineViewGrid } from "react-icons/hi";
import { TfiViewListAlt } from "react-icons/tfi";
function Feature() {
  return (
    <div className="flex space-x-4 p-4 bg-white rounded-md shadow-md w-[10%] mt-10">
    <button
      className="flex items-center justify-center p-3 rounded-md transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-600"
    >
      <HiOutlineViewGrid className="w-6 h-6" />
    </button>
  
    <button
      className="flex items-center justify-center p-3 rounded-md transition-colors duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300"
    >
      <TfiViewListAlt className="w-6 h-6" />
    </button>
  </div>
  )
}

export default Feature
