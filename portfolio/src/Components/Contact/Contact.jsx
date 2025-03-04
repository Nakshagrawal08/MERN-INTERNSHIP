import React from 'react'
import ContactRedirects from './ContactRedirects'
import Contactform from './Contactform'
import ContactDet from './ContactDet'

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
                <ContactRedirects/>
            </div>
            <div className=" p-2" >
                <ContactDet icon='phone' href="tel:9479586236" title='9479586236'/>
                <ContactDet icon='mail-forward' href="mailto:nakshatragrawal0806@gmail.com" title='nakshatragrawal0806@gmail.com'/>
                <ContactDet icon='location-arrow' href="#" title=' Goyal Bhawan, Mali Kuwa, Khandwa, M.P. (450001)'/>
                
            </div>
        </div>
        <div className="bg-gray-700 shadow-pink-400 text-white p-14 lg:pb-8 w-full lg:w-1/3  lg:rounded-r-2xl rounded-b-2xl lg:rounded-bl-none">
            <h3 className="text-2xl underline mb-4 underline-offset-8 decoration-gray-300">Your Message</h3>
            <Contactform PH='Enter your Name' title='Name'/>
            <Contactform PH='Enter your number' title='Contact No'/>
            <Contactform PH='Enter your address' title='Address'/>
            <Contactform PH='Enter your message' title='Message'/>
            <br/>
            <button className="py-2 px-12 mr-10 hover:py-3 hover:px-14 font-bold bg-blue-400 float-right rounded-2xl"> Submit</button>
        </div>
    </div>

 </>
  )
}

export default Contact
