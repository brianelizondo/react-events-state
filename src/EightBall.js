import React, { useState } from 'react';
import './EightBall.css';

function getAnswer(answers){
    const randomAnswerIDX = Math.floor(Math.random() * answers.length);
    return  answers[randomAnswerIDX];
}

function EightBall(props){
    const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });
    const [records, setRecord] = useState({ green: 0, goldenrod: 0, red: 0 });
    
    const ballClassColor = `EightBall-ball EightBall-${ answer.color }`;
    for(const [color, count] of Object.entries(records)) {
        records[color] = answer.color === color ? records[color] + 1 : records[color];
    }

    function resetBall(){
        setAnswer({ msg: "Think of a Question", color: "black" });
        setRecord({ green: 0, goldenrod: 0, red: 0 });
    }
    
    return (
        <div className='EightBall'>
            <div className={ ballClassColor } onClick={() => setAnswer(getAnswer(props.answers))}>
                <div className='EightBall-answer'>{ answer.msg }</div>
            </div>
            <div className='EightBall-button'>
                <button onClick={() => resetBall()}>Reset</button>
            </div>
            <div className='EightBall-record'>
                <span className='EightBall-record-green'><b>Green:</b> { records.green } - </span>
                <span className='EightBall-record-goldenrod'><b>Goldenrod:</b> { records.goldenrod } - </span>
                <span className='EightBall-record-red'><b>Red:</b> { records.red }</span>
            </div>
        </div>
    );
}

EightBall.defaultProps = {
    answers : [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ]
}

export default EightBall;