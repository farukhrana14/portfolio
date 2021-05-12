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
                    BlogWorksData.map(data =>
                        <div className='my-item'>
                            <img className='img-fluid' src={data.image} alt='...'></img>
                            <div className='grid-container'>
                                <a href={data.siteURL}><h5 className='pt-5 pb-3 text-white text-center'>{data.articleName}</h5></a>
                                <a href={data.siteURL}><span className='pt-5 pb-3 text-white text-center'><FontAwesomeIcon icon={faExternalLinkSquareAlt} className='' style={{ fontSize: '30px', color: '#0099ff' }} /></span></a>

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