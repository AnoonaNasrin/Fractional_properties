import React from 'react'
import './AboutUs.css'
import Carousel from './carousel/Carousel'

function AboutUs() {
    return (
        <div className='aboutus-wrapper'>
            <h1>Welcome to Fractional Properties</h1>
            <div className='container'><Carousel /></div>
            <div className='abouts-details-container '>
                <h2 className='aboutus-heading'>WHO WE ARE?</h2>
                <div className='aboutus-content'>
                    <p>We are where luxury living meets smart investments.</p>
                </div>
                <p>We specialize in offering fractional ownership opportunities for high-end properties, allowing our clients to enjoy all the benefits of owning a vacation home or investment property without the hassle and expense of full ownership.
                </p>
            </div>
            <div className='aboutcontent'>
                <p className='about-para1'>
                    Our team is comprised of experienced real estate professionals who are passionate about helping our clients achieve their lifestyle and investment goals. We believe that fractional ownership is the future of vacation and investment property ownership, and we're committed to making it accessible and affordable for everyone.
                </p>
                <p className='about-para2'>

                    At
                    <span style={{
                         fontStyle: 'italic', marginLeft: '1rem', color: 'darkblue', fontWeight:'bold'
                    }}>Fractional Properties</span>,
                    we're dedicated to providing our clients with a seamless, hassle-free fractional ownership experience. From the moment you first contact us to the day you take possession of your fractional property, we'll be there to guide you every step of the way.
                    Whether you're looking for a luxurious vacation home, a smart investment opportunity, or a combination of both, we have the perfect fractional ownership option for you. Browse our current listings or contact us today to learn more about how we can help you achieve your lifestyle and investment goals.
                </p>
            </div>
        </div>
    )
}

export default AboutUs