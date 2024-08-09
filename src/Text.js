import React, { useState } from 'react';
import './Text.css'

function TextUp() {
    const [text, SetText] = useState("Welcome to WordCounter!!");
    // text = "Hello new textarea";            //wrong way to change variable/state
    // SetText("Hello divine oh textarea!!");   // correct way
    let handlechange = (event) => {
        let copy = document.getElementById('copy');
        copy.innerHTML = "Copy to Clickboard";
        copy.classList.remove('copied');
        SetText(event.target.value);
    }

    function handleupClick() {
        SetText(text.toUpperCase());
    }

    function handleloClick() {
        SetText(text.toLowerCase());
    }

    function handlecpClick() {
        navigator.clipboard.writeText(text); 
        document.getElementById('copy').addEventListener('click', (event) => {
            event.target.innerHTML = "Copied";
            event.target.classList.add('copied');
        });

    }

    return(
        <>
        <div className="container my-5">
            <h1>Word Counter</h1>
            <div className='my-5'>
                <textarea rows={10} name='upper' placeholder='Enter text here..' value={text} onChange={handlechange} className='form-control'></textarea>
            </div>
            <button className='btn btn-success my-3' onClick={handleupClick}>Make Upper</button>
            <button className='btn btn-success my-3' onClick={handleloClick}>Make Lower</button>
            <button className='btn btn-success my-3' id='copy' onClick={handlecpClick}>Copy to Clickboard</button>
        </div>
        <div className="container my-3 summary-box">
            <h2 className='summary'>Your Text Summary</h2>
            <p className='count'>Word Count: { text.length ? text.split(' ').length : 0} Character Count: {text.length}</p>
        </div>
        </>
    )
}

export default TextUp