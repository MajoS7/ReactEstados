import React, {useState} from 'react';
import './ChangeText.css';

export const ChangeText = ()=>{
    const [Ctext, setCtext]=useState("");
    return(
        <div className="containerText">
            <h1>Change text</h1>
            <p className="text">{Ctext}</p>
            <input className="inputText" type="text" onKeyUp={event=>setCtext(event.target.value)} placeholder="Write..." />
        </div>
        

    );
}