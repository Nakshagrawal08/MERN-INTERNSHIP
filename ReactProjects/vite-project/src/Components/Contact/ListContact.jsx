import React from 'react';
import pic from '../pictures/calling.jpg';

function ListContact({ Name, Email, Delete, Number, i }) {
  return (
    <div className="p-3 gap-3 text-lg border-b jus border-gray-200 grid grid-cols-4 ">
      <div className="flex  gap-6">
        <img src={pic} alt="Contact" className="w-8 h-8 rounded-full" />
        <span className="truncate">{Name}</span> {/* Use span for inline text */}
      </div>

      

      <div className="flex   gap-3">
      <span className="truncate">{Email}</span> {/* Use span for inline text */}
      </div>
      <div className="flex   gap-3">
        <span className="truncate">{Number}</span> {/* Use span for inline text */}
      </div>

      <div className="flex   gap-3">
          <i
            className="fa-solid fa-trash text-red-500 hover:text-red-600 cursor-pointer"
            onClick={() => Delete(i)}
          ></i>
          <i className="fa-solid fa-star text-yellow-400 hover:text-yellow-500 cursor-pointer"></i>
          <i className="fa-solid fa-pen text-blue-500 hover:text-blue-600 cursor-pointer"></i>
          <i className="fa-solid fa-ellipsis-vertical text-gray-500 cursor-pointer"></i>
        </div>
    </div>
  );
}

export default ListContact;