import React from 'react'

function ContactDet(prop) {
  return (
    <h2><i className={`fa fa-${prop.icon} `} aria-hidden="true"></i> <a href= {prop.href}>{prop.title}</a></h2>

  )
}

export default ContactDet
