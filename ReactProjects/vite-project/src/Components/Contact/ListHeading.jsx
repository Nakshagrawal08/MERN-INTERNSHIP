import React from 'react';

function ListHeading() {
  return (
    <div className="m-2 p-3 gap-3 font-semibold text-gray-700 grid grid-cols-3 border-b border-gray-200">
      <h1 className="pl-6">Name</h1>
      <h1 className="text-center">Email</h1>
      <h1 className="text-right pr-6">Phone Number</h1>
    </div>
  );
}

export default ListHeading;