import React from 'react';
import './Box.css';

function Box(props){
    const { id, color } = props;
    const boxID = `box-${ id }`;
    const boxClassColor = `Box Box-${ color }`;
    return (
        <div id={ boxID } className={ boxClassColor }></div>
    );
}

export default Box;