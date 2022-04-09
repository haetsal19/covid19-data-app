import React from 'react';
import './Districts.css';

export default function District({ data }) {
    console.log(data)
    return
    <div className='districts'>
        <h4>{data.name}</h4>
        <div>{data.today}</div>
        <div>{data.diff}</div>
    </div>
        // <svg xmlns="img/south-korea.svg" viewBox='0 0 524 631'></svg>
        ;
} 