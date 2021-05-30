import React from 'react';
import './CallToActionOne.css';



const CallToActionOne = () => {




    return (
        <div className='call-to-action-one pb-5'>
            <h4 className='text-title text-center pt-5'>What's Next?</h4>
            <div className='grid-container'>
              

                <div>
                    <a href={'#contact-form'}>
                        <button className='my-btn btn btn-outline-dark'>Assign a demo Project</button>
                    </a>
                </div>

                <div>
                    <a href={'https://drive.google.com/uc?export=download&id=1f9Z61zDHQ3LT4HfQCcWp2JNYSwP09Puw'}>
                        <button className='my-btn btn btn-outline-dark'>Download Resume</button>
                    </a>
                </div>

                <div>
                    <a href='#contact-form'>
                        <button className='my-btn btn btn-outline-dark'>Hire me</button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default CallToActionOne;