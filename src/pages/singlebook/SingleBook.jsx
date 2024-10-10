import React from 'react'
import { FaFacebookF, FaWhatsapp, FaTwitter  } from "react-icons/fa";

function SingleBook() {
  return (
    <div>
      <div>
        <img src="src\assets\images\amanda.png" alt=""/>
      </div>
      <div>
        <h1>title</h1>
        <h1>authour</h1>
        <h1>fiction</h1>
        <p>Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <p>share:</p>
            <span><FaFacebookF /></span>
            <span><FaWhatsapp /></span>
            <span><FaTwitter /></span>
      </div>
    </div>
  )
}

export default SingleBook
