import React from 'react';
import worksData from './MyWorksData';
import MySingleWork from './MySingleWork';
import tagData from './TagData';
import './MyWorks.css';

const MyWorks = () => {
    return (
        <div className='mt-5' style={{backgroundColor: '#343A40'}}>
            <h3 className='text-center pt-3' style={{ color: '#0099ff' }}>My Project Works</h3>
            <div className='tag-list text-center'>
                {
                    tagData.map((tag, index)=> <button className='tag-btn btn btn-primary'>{tag}</button>)
                }
            </div>
            <div className='' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                {
                    worksData.map((project, index) => <MySingleWork project={project} key={index} ></MySingleWork>)
                }
            </div>

        </div>
    );
};

export default MyWorks;