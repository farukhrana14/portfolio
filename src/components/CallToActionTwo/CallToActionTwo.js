import React from 'react';
import './CallToActionTwo.css';



const CallToActionTwo = () => {
    return (
        <div className='call-to-action-two pb-5' style={{borderTop: '3px solid #0099ff', borderBottom: '3px solid #0099ff', backgroundColor: '#343A40'}}>
            <h4 className='text-title text-center pt-5'>Now What?</h4>
            <div className='grid-container-two'>
                <div>
                   <a href={'#contact-form'}><button className='my-btn-two btn btn-outline-dark'>Hire me</button></a> 
                </div>

                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Share my Resume</button>
                </div>

                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Write a Feedback</button>
                </div>

                <div>
                    <a href={'#contact-form'}> <button className='my-btn-two btn btn-outline-dark'>Contact me</button></a>
                </div>
            </div>
        </div>
    );
};

export default CallToActionTwo;