import React from 'react';

function ListHeading() {
  return (
    <div className="m-2 p-4 gap-3 text-left font-semibold text-gray-700 grid grid-cols-4 border-b border-gray-200">
      <div>
        <h1 className="pl-10">Name</h1> {/* Added pl-6 here */}
      </div>
      <div>
        <h1 className="">Email</h1> {/* Added text-center here */}
      </div>
      <div>
        <h1 className="">Phone Number</h1> {/* Added pr-6 here */}
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

export default ListHeading;