import React, { useState } from 'react';
import worksData from './MyWorksData';
import MySingleWork from './MySingleWork';
import tagData from './TagData';
import './MyWorks.css';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const MyWorks = () => {
    const [newData, setNewData] = useState(worksData);


    const handleClick = (e) => {
        console.log(e)
        if (e !== 'all') {
            let filteredWorsData = worksData.filter((eachVal) => {
                let opt = eachVal.tags.some(tag => tag === e);
                return opt;
            })
            setNewData(filteredWorsData);
        } else {
            setNewData(worksData);
        }
    }

    return (
        <div className='mt-5' style={{ backgroundColor: '#343A40' }}>

            <div className='tag-list text-center'>

                <Accordion>
                    <Card style={{ backgroundColor: '#343A40' }}>
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ color: 'white' }}>
                                <h3 className='text-center pt-3' style={{ color: '#0099ff' }}>My Project Works: Click to Filter by Tag <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '30px', paddingTop: '7px' }} /> </h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <button onClick={() => handleClick('all')} className='tag-btn text-white my-btn btn btn btn-outline-primary'>See All</button>
                                {
                                    tagData.map(tag => <button key={Math.random()} onClick={() => handleClick(tag)} className='tag-btn text-white my-btn btn btn btn-outline-primary'>{tag}</button>)
                                }

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>




            </div>
            <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {
                    newData.map((project, index) => <MySingleWork project={project} key={index} ></MySingleWork>)
                }
            </div>

        </div>
    );

};

export default MyWorks;