import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const MySingleWork = ({ project }) => {
    const { siteName, image, siteURL, description, techUsed, gitRepo } = project;
    
    return (
        
        <div className='col pt-3 pb-5' style={{maxWidth: '400px'}}>
            
            <div className="card ">
                <img src={image} className='img-fluid card-img-top' style={{maxWidth: '350px', maxHeight: '150px'}} alt="" />
                <div className="card-body" >
                    <h4 className='card-title'><a href={siteURL}>{siteName}</a></h4>
                    <p className='card-text'>{description}</p>
                </div>
                <div className="card-footer">
                <a href={gitRepo}> <FontAwesomeIcon icon={faGithub} style={{fontSize: '30px', color: '#343A40', paddingTop: '7px'}} /> </a>
                
                    {
                        techUsed.map(tech => <button style={{minWidth: '100px'}}  className='btn btn-outline-dark mx-1 mb-1 mt-1'>{tech}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MySingleWork;