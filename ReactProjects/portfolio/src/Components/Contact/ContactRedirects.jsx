import React from 'react'
import insta from '/src/pictures/INSTA.jpg'
import x from '/src/pictures/x.jpg'
import fb from '/src/pictures/fb.jpg' 
import wp from '/src/pictures/wp.jpg'
function ContactRedirects() {
  return (
    <>
        <a target="_blank" href="https://www.instagram.com/the___nakshatra?igsh=N2dyenVjbGhhcXR4"><img src={insta} className="w-10 h-10 rounded-full"/></a>
        <a target="_blank" href="https://x.com/Nakshatra864?t=3pzbShSaD_jIbXhanSqVhw&s=09"><img src={x} className="w-10 h-10 rounded-full"/></a>
        <a target="_blank" href="https://m.facebook.com/nakshatra.agrawal.391/"><img src={fb} className="w-10 h-10 rounded-full"/></a>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919479586236&text&type=phone_number&app_absent=0"><img src={wp} className="w-10 h-10 rounded-full"/></a>
    </>
  )
}

export default ContactRedirects
