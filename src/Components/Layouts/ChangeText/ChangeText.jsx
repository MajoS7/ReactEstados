import React, {useState} from 'react';

export const ChangeText = ()=>{
    const [Ctext, setCtext]=useState("");
    return(
        <div>
            <h1>Change text</h1>
            <p>{Ctext}</p>
            <input type="text" onKeyUp={event=>setCtext(event.target.value)} />
        </div>
        

    );
}