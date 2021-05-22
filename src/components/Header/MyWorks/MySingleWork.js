import React from 'react';
import './MySingleWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const MySingleWork = ({ project }) => {
    const { siteName, image, siteURL, description, techUsed, gitRepo } = project;

    return (

        <div className='container card-deck pt-3 pb-5' style={{ marginLeft: '-2px' }} >

            <div className="card border border-primary" >
                <img src={image} className='img-fluid card-img-top' alt="" style={{height: '120px', borderBottom: '1px solid #999999'}} />
                <div className="card-body" >
                    <h4 className='card-title'><a href={siteURL}>{siteName}</a></h4>
                    <p className='card-text'>{description}</p>
                </div>
                <div className="card-footer d-flex">
                    <div className='logo-icon' style={{margin: 'auto', textAlign: 'center'}}>
                        <a href={gitRepo}> <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px', color: '#343A40', paddingTop: '7px' }} /> </a>
                        <a href={siteURL}><FontAwesomeIcon icon={faExternalLinkSquareAlt} className='mt-3' style={{ fontSize: '25px', color: '#343A40' }} /></a>

                    </div>

                    <div className='tech-used'>
                        {
                            techUsed.map((tech, index) => <button key={index} style={{ minWidth: '100px', fontSize: '11px' }} className='btn btn-outline-dark mx-1 mb-1 mt-1'>{tech}</button>)
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MySingleWork;