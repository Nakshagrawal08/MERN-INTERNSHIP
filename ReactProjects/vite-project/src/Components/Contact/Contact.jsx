import React, { useState } from 'react';
import InputContact from './InputContact';
import ListContact from './ListContact';
import ListHeading from './ListHeading';
import image from './CONTACT.png';
import grid from './grid.png';
import pic from '../pictures/calling.jpg';

function Contact() {
  const [Addname, SetAddname] = useState('');
  const [Addemail, SetAddemail] = useState('');
  const [Addnumber, SetAddnumber] = useState('');
  const [AddContact, SetAddContact] = useState([]);

  const Save = () => {
    SetAddContact([
      ...AddContact,
      {
        Name: Addname,
        Email: Addemail,
        Number: Addnumber,
      },
    ]);
    SetAddname('');
    SetAddemail('');
    SetAddnumber('');
  };

  const Delete = (index) => {
    const newContacts = [...AddContact];
    newContacts.splice(index, 1);
    SetAddContact(newContacts);
  };

  const Deleteall = () => {
    SetAddContact([]);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen p-4"> {/* Gradient background */}
      <div className="bg-white shadow-lg rounded-xl p-4 mb-6"> {/* White card for header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <i className="fa-solid text-gray-600 fa-bars hover:bg-gray-200 text-3xl p-2 rounded-full"></i>
            <img src={image} alt="Contact Icon" className="h-10" />
            <h1 className="text-2xl font-semibold text-indigo-700">Contacts</h1>
          </div>
          <div className="w-[60%] flex items-center bg-gray-100 rounded-lg p-1">
            <i className="fa-solid text-gray-600 fa-search text-xl ml-2"></i>
            <input
              placeholder="Search"
              className="flex-grow bg-transparent border-none outline-none p-2"
            />
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-solid text-gray-600 text-xl"></i>
            <i className="fa-solid text-gray-600 text-xl"></i>
            <img src={grid} alt="Grid Icon" className="h-8" />
            <img src={pic} alt="Profile" className="h-8 rounded-full border border-gray-300" />
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-6 bg-white rounded-xl shadow-lg"> {/* White card for content */}
        <div className="w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-200"> {/* Input section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h1 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Add Contact</h1>
            <InputContact
              type="text"
              value={Addname}
              Onchange={(e) => SetAddname(e.target.value)}
              title="Enter Name"
            />
            <InputContact
              type="text"
              value={Addnumber}
              Onchange={(e) => SetAddnumber(e.target.value)}
              title="Enter Contact Number"
            />
            <InputContact
              type="email"
              value={Addemail}
              Onchange={(e) => SetAddemail(e.target.value)}
              title="Enter Email"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                onClick={Save}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={Deleteall}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Delete All
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/3"> {/* Contact list section */}
          <h1 className="text-2xl font-semibold text-indigo-700 mb-4">
            Contact ({AddContact.length})
          </h1>
          <ListHeading />
          <hr className="my-2" />
          {AddContact.map((item, i) => (
            <ListContact
              key={i}
              Name={item.Name}
              i={i}
              Email={item.Email}
              Delete={Delete}
              Number={item.Number}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
 