import React from 'react'
import './faqs.css'


const QuestionsObj = {
    'How does buying shares in YOURS™ properties work?': 'Each YOURS™ property is owned by a special purpose vehicle, and this SPV can be owned by up to eight co-owners. You can own up to fours shares in a property of your choice or a share in multiple properties.',
    'What monthly costs will I have to pay as a YOURS™ shareholder?': 'Home operating costs such as property management, maintenance, repairs, etc. are passed on directly to shareholders. Costs are shared pro-rata.',
    'Who will manage the property?': 'YOURS™ has an expert team that will fully manage the home to exacting standards. All costs and fees are passed on to the owners with full transparency and are shared pro-rata.',
    'Do I have the ownership of the property at YOURS™?': 'Absolutely! As a shareholder of the SPV that owns the YOURS™ home, you have shared ownership of the entire asset.'
}

console.log(Object.keys(QuestionsObj))
const FAQs = () => {


    //handle show box of answer
    return (
        <div className='faqs-page-wrapper'>
            <div className='left-container'>
                <div className='questionWrapper'>
                    <h4 onClick={handleAnwerWrapper}>question</h4>
                    <div className='answerWrapper'>answer</div>
                </div>
            </div>
            <div className='right-container'>FAQs</div>
        </div>
    )
}

export default FAQs