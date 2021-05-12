import React from 'react';
import './CallToActionOne.css';



const CallToActionOne = () => {
    return (
        <div className='call-to-action-one pb-5'>
            <h4 className='text-title text-center pt-5'>What's Next?</h4>
            <div className='grid-container'>
                <div>
                    <button className='my-btn btn btn-outline-dark'>Download Resume</button>
                </div>

                <div>
                    <button className='my-btn btn btn-outline-dark'>Assign a demo Project</button>
                </div>

                <div>
                    <button className='my-btn btn btn-outline-dark'>Book a Call</button>
                </div>

                <div>
                    <button className='my-btn btn btn-outline-dark'>Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;