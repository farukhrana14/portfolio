import React from 'react';
import profilePic from './../../../images/profile-picture-copy.png';
import './HeaderContents.css';

const HeaderContents = () => {
    return (
        <div className='header-contents ' style={{backgroundColor: '#343A40'}}>
        <div className='main-div' >
            <div className='left-image text-center mt-5 text-white'>
                
                <img src={profilePic} className='profile-pic img-fluid' alt=""/>
            </div>
            <div className='right-text '>
                <div className='my-intro-text pt-5 p-3'>
                    <p style={{color: '#0099ff', fontSize: '25px'}}>Hi there!</p>
                    <h2 style={{color: '#0099ff', fontSize: '35px'}}>This is Farukh</h2>
                    <ul className="my-li-group d-flex">
                        <li className="my-li mr-5" style={{fontSize: '20px', fontWeight: '700'}}> <span className='li-text'>Web Developer</span> </li>
                        
                        <li className="my-li" style={{fontSize: '20px', fontWeight: '700'}}> <span className='li-text'>Python Programmer</span>  </li>
                    </ul>
                    <p style={{color: '#0099ff', fontSize: '20px', fontWeight: '600'}}>I am a hardworking web developer.  My fascinations are JavaScript and Python. <br/> This is my portfolio site where you can connect me and get to know about my works.</p>
                </div>
                
                <div className='my-button text-center'>
                <button type="button" className="text-white my-btn btn btn btn-outline-primary mb-1">Hire me</button> 
                
                <button type="button" className="text-white my-btn my-btn btn btn btn-outline-primary mb-1">Contact me</button>


                </div>

            </div>
        </div>
        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L80,74.7C160,117,320,203,480,202.7C640,203,800,117,960,69.3C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    );
};

export default HeaderContents;