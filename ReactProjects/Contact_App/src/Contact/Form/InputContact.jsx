import React from 'react';

function InputContact(prop) {
  return (
    <div className="mb-4"> {/* Add margin for spacing */}
      <input
        className="p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-white text-gray-800"
        type={prop.type}
        value={prop.value}
        onChange={prop.Onchange}
        placeholder={prop.title}
      />
    </div>
  );
}

export default InputContact;