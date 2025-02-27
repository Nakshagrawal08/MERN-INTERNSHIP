import React from 'react'

function Contact() {
  return (
  <>

    <div className="ml-2 text-center">
        <h1 className="text-4xl underline underline-offset-14 place-content-center  decoration-blue-500">Contact Me</h1>
    </div> 
    <div className="lg:flex lg:flex-wrap justify-center mx-10 my-10" id="contact">
        <div className="bg-gray-700 text-white  w-full lg:w-1/3 p-5 pl-16 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none ">
            <h3 className="text-2xl underline mb-4 underline-offset-8 decoration-gray-300">Nakshatra  Agrawal </h3>
            <div className="flex gap-x-4 my-4 ">
                <a target="_blank" href="https://www.instagram.com/the___nakshatra?igsh=N2dyenVjbGhhcXR4"><img src="/src/pictures/INSTA.jpg" className="w-10 h-10 rounded-full"/></a>
                <a target="_blank" href="https://x.com/Nakshatra864?t=3pzbShSaD_jIbXhanSqVhw&s=09"><img src="/src/pictures/x.jpg" className="w-10 h-10 rounded-full"/></a>
                <a target="_blank" href="https://m.facebook.com/nakshatra.agrawal.391/"><img src="/src/pictures/fb.jpg" className="w-10 h-10 rounded-full"/></a>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919479586236&text&type=phone_number&app_absent=0"><img src="/src/pictures/wp.jpg" className="w-10 h-10 rounded-full"/></a>
            </div>
            <div className=" p-2" >
                <h2><i className="fa fa-phone" aria-hidden="true"></i> <a href= 'tel:creates the call link '>9479586236</a></h2>
                <h2><i className="fa fa-mail-forward" aria-hidden="true"></i><a href="mailto:nakshatragrawal0806@gmail.com" >nakshatragrawal0806@gmail.com</a> </h2>
                <h2><i className="fa fa-location-arrow" aria-hidden="true"></i> Goyal Bhawan, Mali Kuwa, Khandwa, M.P. (450001)</h2>
            </div>
        </div>
        <div className="bg-gray-700 shadow-pink-400 text-white p-14 lg:pb-8 w-full lg:w-1/3  lg:rounded-r-2xl rounded-b-2xl lg:rounded-bl-none">
            <h3 className="text-2xl underline mb-4 underline-offset-8 decoration-gray-300">Your Message</h3>
            <h4 className="font-bold">Name</h4>
            <input placeholder="Enter your name" className="p-1 my-2 w-full text-white"/><br/>
            <h4 className="font-bold">Contact No</h4>
            <input placeholder="Enter your number" className="p-1 my-2 w-full text-white"/><br/>
            <h4 className="font-bold">Address</h4>
            <input placeholder="Enter your address" className="p-1 my-2 w-full text-white"/><br/>
            <h4 className="font-bold">Message</h4>
            <input placeholder="Enter your message" className="p-1 my-2 w-full text-white"/><br/><br/>
            <button className="py-2 px-12 mr-10 hover:py-3 hover:px-14 font-bold bg-blue-400 float-right rounded-2xl"> Submit</button>
        </div>
    </div>

 </>
  )
}

export default Contact
