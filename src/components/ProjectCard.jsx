import React from 'react'
import placeholderIMG from '../assets/legoPlaceholder.jpg'

export default function ProjectCard({project}) {
    return (
        <div className='Card'>
            <div className='Card-Header'>
                <button className='projectButtons'>x</button>
                <button className='projectButtons'>-</button>
                <button className='projectButtons'>o</button>
            </div>
            <div className='Image-Box'>
                <img src={placeholderIMG} width={300} height={200} alt='sad lego man'></img>
            </div>
            <div className='Subheading'>{project.title}</div>
            <p className='Card-Text'>{project.info}</p>
            <div className='Card-Footer'>
                <button>See More</button>
                <button>Like</button>
            </div>
        </div>
    );
}
