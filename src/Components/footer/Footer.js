import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { facebook2 } from 'react-icons-kit/icomoon/facebook2'
import { instagram } from 'react-icons-kit/icomoon/instagram'
import { linkedin } from 'react-icons-kit/icomoon/linkedin'


const Footer = () => {
  return (
    <div className='footer-wrapper' >
      <div className='container'>
        <div className='footer-container'>
          <div className='heading-wrapper column1'>
            <h3 className='footer-heading'>Fractional Properties</h3>
          </div>
          <div className='footer-options-container row'>
            <div className='col column2'>
              <div className='column2-heading'>
                <h5>Fractional Properties</h5>
              </div>
              <Link to='/aboutus' className='linkItem'><p>About us</p></Link>
              <Link to='/howitworks' className='linkItem'><p>How It Works</p></Link>
              <p>Listings</p>
              <Link to='/enquiry' className='linkItem'><p>Contact Info</p></Link>
              <Link to='/faqs' className='linkItem'><p>FAQ's</p></Link>
            </div>
            <div className='col column3'>
              <h5>Quick Links</h5>
              <p>News & Media</p>
              <p>Partner with us</p>
            </div>
            <div className='col column4'>
              <h5>Others</h5>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
        <div className='container footer-copyrights-icons'>
          <p className='copyright-title '>Copyrights 2022, RERA no-PRM</p>
          <div className='icon-wrapper'>
            <Icon icon={facebook2} className='icons' size={35} />
            <Icon icon={instagram} className='icons' size={35} />
            <Icon icon={linkedin} className='icons' size={35} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer