import React from 'react'
import './enquireNow.css'
import Image from './image.avif'
import EnquiryForm from './enquiryForm/EnquiryForm'

const EnquireNow = () => {
  return (
    <div>
      <div className='fluid-container image-container'>
        <img src={Image} alt='' className='image' />
      </div>

      <div className=' fluid-container form-wrapper row'>
        {/* left form */}
        <div className='leftForm-wrapper col'>
          <div >
            <h1 >How can we help ?</h1>
            <h4 className='leftForm-wrapper-item'> Please reach out to us on the number below,
              <br />or by filling up the contact form.</h4>
            <h4 className='leftForm-wrapper-item'>Phone</h4>
            <h6 className='contact-details-wrapper'>Fractional Properties
              <span className='contactno'>123456789</span></h6>
            <h4 className='leftForm-wrapper-item'>Mail</h4>
            <span className='email'>test@fractional.properties.com</span>
            <div className='icon-wrapper'></div>
          </div>
        </div>
        {/* right form */}
        <div className='rightForm-wrapper col'>
          <h2 className='rightForm-wrapper-heading'>Tell us more about yourself so we can help you find your second home.</h2>
          <div className='enquiryform'>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireNow