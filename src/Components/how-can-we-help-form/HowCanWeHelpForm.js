import React, { useState } from 'react'
import './how-can-we-help-form.css'

const contactCode = []
for (let i = 1; i <= 95; i++) {
    contactCode.push(i)
}


const HowCanWeHelpForm = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactCode: '',
        contact: '',
        ownershipType: '',
        location:''
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
                                    name='ownershipType' value='full-ownership' onChange={handleInputs} />
                            </div>
                        </div>
                        <input type='text' className='firstname' placeholder='First Name *'
                            name='firstname' value={formData.firstname} onChange={handleInputs} required>
                        </input>
                        <div className='contactNo'>
                            <select className='contact-code-selet' name='contactCode' value={formData.contactCode} onChange={handleInputs} required>
                                {contactCode.map((code)=>(
                                    <option value={code} key={code}>+ {code}</option>
                                ))}
                            </select>
                            <input type='text' className='enter-contactno' placeholder='Phone Number *'
                                name='contact' value={formData.contact} onChange={handleInputs} required />
                        </div>
                    </div>

                    <div className='column2'>
                        <h5>Choose Location *</h5>
                        <select className='location-select' name='location' value={formData.location} onChange={handleInputs}>
                            <option value='Alibaug'>Alibaug</option>
                            <option value='Goa'>Goa</option>
                            <option value='Nilgiris'>Nilgiris</option>
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