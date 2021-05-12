import React from 'react';
import './CallToActionTwo.css';



const CallToActionTwo = () => {
    return (
        <div className='call-to-action-two pb-5' style={{borderTop: '3px solid #0099ff', borderBottom: '3px solid #0099ff'}}>
            <h4 className='text-white text-center pt-5'>Now What?</h4>
            <div className='grid-container-two'>
                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Hire me</button>
                </div>

                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Share my Resume</button>
                </div>

                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Write a Feedback</button>
                </div>

                <div>
                    <button className='my-btn-two btn btn-outline-dark'>Contact me</button>
                </div>
            </div>
        </div>
    );
};

export default CallToActionTwo;