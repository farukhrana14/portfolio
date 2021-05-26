import React from 'react';
import './BlogWorks.css';
import BlogWorksData from './BlogWorksData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const BlogWorks = () => {
    return (
        <div className='pt-5' style={{ backgroundColor: '#343A40' }}>

            <h3 className='text-white text-center'>Blogs I wrote</h3>
            <div className='container-fluid'>

                {
                    BlogWorksData.map((data, index) =>
                        <div key={index+1} className='my-item'>
                            <img key={index+2} className='img-fluid' src={data.image} alt='...'></img>
                            <div key={index+3} className='grid-container'>
                                <a key={index+4} href={data.siteURL}><h5 key={index+6} className='pt-5 pb-3 text-white text-center'>{data.articleName}</h5></a>
                                <a key={index+5} href={data.siteURL}><span className='pt-5 pb-3 text-white text-center'><FontAwesomeIcon icon={faExternalLinkSquareAlt} className='' style={{ fontSize: '30px', color: '#0099ff' }} /></span></a>

                            </div>
                        </div>

                    )
                }

            </div>
            <div className='follow-blogs-button pt-5 pb-5'>
                <button className='btn btn-success'>You May Choose to Follow My Blogs</button>

            </div>
        </div>
    );
};

export default BlogWorks;