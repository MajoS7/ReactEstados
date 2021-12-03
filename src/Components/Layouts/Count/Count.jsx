import React, {useState} from "react";
import "./Count.css";

export const Count = ()=>{
    const [counts, setCounts]=useState(0);
    return(
        <div className="Count">
            <h1>Count</h1>
            <p>{counts}</p>
            <div className="buttons">
                <button className="button" onClick={()=>setCounts(counts+1)}>ADD</button>
                <button className="button" onClick={()=>setCounts(counts-1)}>SUBTRACT</button>
            </div>
            
        </div>

    );
}