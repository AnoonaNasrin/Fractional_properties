import React, { useState } from 'react'
import './how-can-we-help-form.css'


const HowCanWeHelpForm = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactCode: '',
        contact: '',
        ownershipType: ''
    })

    const [isChecked, setIsChecked] = useState(false)
    //const [ErrBorder, setErrBorder] = useState('black')

    //handle Inputs
    const handleInputs = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    //handle submit data
    const handleSubmit = (e) => {
        e.preventDefault()

        if (isChecked) {
            console.log(formData)
            console.log(formData.ownershipType)
        }
        else {
            console.log('checkbox not selected')
        }
    }

    return (
        <div className='fluid-container howCanWeHelpForm-wrapper'>
            <h1>How can we help?</h1>
            <div>Please share the questions you might have, and we’ll get back to you soon</div>

            <form >
                <div className='HowCanWeHelpForm-container'>
                    <div className='column1'>
                        <h5>Interested in ?</h5>
                        <div className='radio-option'>
                            <div className='radio-option1'>
                                <label htmlFor='fractional-ownership' >Fractional Ownership</label>
                                <input type='radio' className='radioBtn' id='fractional-ownership' 
                                name='ownershipType' value='fractional-ownership' onChange={handleInputs} />
                            </div>
                            <div className='radio-option2'>
                                <label htmlFor='full-ownership'>Full Ownership</label>
                                <input type='radio' className='radioBtn' id='full-ownership' 
                                name='ownershipType' value='full-ownership' onChange={handleInputs}  />
                            </div>
                        </div>
                        <input type='text' className='firstname' placeholder='First Name *'
                            name='firstname' value={formData.firstname} onChange={handleInputs} required>
                        </input>
                        <div className='contactNo'>
                            <select className='contact-code-selet' name='contactCode' value={formData.contactCode} onChange={handleInputs} required>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='91'>91</option>
                            </select>
                            <input type='text' className='enter-contactno' placeholder='Phone Number *'
                                name='contact' value={formData.contact} onChange={handleInputs} required />
                        </div>
                    </div>

                    <div className='column2'>
                        <h5>Choose Location *</h5>
                        <select className='location-select'>
                            <option>Alibaug</option>
                            <option>Gaon</option>
                            <option>Nilgiris</option>
                        </select>
                        <input type='text' className='lastname' placeholder='Last Name *'
                            name='lastname' value={formData.lastname} onChange={handleInputs} required />

                        <input type='email' className='email' placeholder='Email ID *'
                            name='email' value={formData.email} onChange={handleInputs} required />
                    </div>
                </div>
                <div className='keep-me-updated-wrapper'>
                    <input type='checkbox' id='keep-me-updated' name='keep-me-updated'
                        checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                        required />
                    <label htmlFor='keep-me-updated' className='keep-meupdated-label' >Keep me updated with the latest news and listings</label>
                </div>
                <button className='submit-btn' onClick={handleSubmit}> Submit</button>
            </form>
        </div>
    )
}

export default HowCanWeHelpForm