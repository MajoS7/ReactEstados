import React, {useState} from "react";

export const Count = ()=>{
    const [counts, setCounts]=useState(0);
    return(
        <div>
            <h1>Count</h1>
            <p>{counts}</p>
            <button onClick={()=>setCounts(counts+1)}>ADD</button>
            <button onClick={()=>setCounts(counts-1)}>SUBTRACT</button>
        </div>

    );
}