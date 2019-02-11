import React from 'react';

const Parallax = ({ bg, tag }) => {

    return bg === "first" ? (
        <div className='parallax1'>
            <div className="tagline">{ tag }</div>
        </div>
    ) : (
        <div className='parallax2'>
            <div className="tagline">{ tag }</div>
        </div> 
    )
}


export default Parallax;