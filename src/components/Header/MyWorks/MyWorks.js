import React, { useState } from 'react';
import worksData from './MyWorksData';
import MySingleWork from './MySingleWork';
import tagData from './TagData';
import './MyWorks.css';

const MyWorks = () => {
    const [newData, setNewData] = useState(worksData);
    

    const handleClick = (e) => {
        console.log(e)
        if (e !== 'all') {
            let filteredWorsData = worksData.filter((eachVal) => {
                let opt = eachVal.tags.some (tag => tag === e);
                return opt;
            })
            setNewData(filteredWorsData);
        } else {
            setNewData(worksData);
        }
    }
    
return (
    <div className='mt-5' style={{ backgroundColor: '#343A40' }}>
        <h3 className='text-center pt-3' style={{ color: '#0099ff' }}>My Project Works</h3>
        <div className='tag-list text-center'>
            <button onClick={()=>handleClick('all')} className='tag-btn btn btn-primary'>See All</button>
            {
                tagData.map(tag => <button key={Math.random()} onClick={() => handleClick(tag)} className='tag-btn btn btn-primary'>{tag}</button>)
            }
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