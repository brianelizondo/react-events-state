import React from 'react';
import Box from './Box';
import './Boxes.css';

function randomColor(colors){
    const randomIDX = Math.floor(Math.random() * colors.length);
    return colors[randomIDX];
}
function showChanged(box){
    box.append("changed!");
    setTimeout(() => {
        box.removeChild(box.firstChild);
    }, "1000");
}

function Boxes(props){
    const { colors, num_boxes } = props;
    const boxList = [];
    for(let i = 1; i <= num_boxes; i++){
        boxList.push(<Box id={ i } color={ randomColor(colors) } />);
    }

    function changeBox(){
        const boxID = Math.floor(Math.random() * num_boxes ) + 1;
        const box = document.getElementById(`box-${boxID}`);
        box.classList.remove(box.classList[1]);
        box.classList.add(`Box-${ randomColor(colors) }`);
        showChanged(box);
    }

    return (
        <div className='Boxes'>
            <div className='Boxes-separate'>Further Study: Color Boxes</div>
            <div className='Boxes-list'>
                { boxList }
            </div>
            <div className='Boxes-button'>
                <button onClick={() => changeBox() }>Change!</button>
            </div>
        </div>
    );
}

Boxes.defaultProps = {
    colors : [
        "black",
        "gray",
        "red",
        "blue",
        "yellow",
        "green",
        "orange",
        "brown",
        "pink",
        "violet",
        "purple",
        "goldenrod",
        "aqua",
        "magenta",
        "lightgreen",
        "hotpink",
        "turquoise",
        "white"
    ],
    num_boxes: 8
}

export default Boxes;