import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const updateRun = () =>{
        const newRuns = runs + 1;
        setRuns(newRuns)
    }
    const updateRun2 = () =>{
        const newRuns = runs + 4;
        setRuns(newRuns)
    }
    const updateRun3 = () =>{
        const newRuns = runs + 6;
        const countSixes = sixes + 1;
        setSixes(countSixes);
        setRuns(newRuns)
    }

    const batsStyle = {
        border: '2px solid red',
        marginBottom: '10px',
        padding: '10px'
    }
    return (
        <div style={batsStyle}>
            <h2>Sakib Al Hasan</h2>
            <p>Six: {sixes}</p>
            <h3>Score: {runs}</h3>
            <button onClick={updateRun}>Singles</button>
            <button onClick={updateRun2}>Fours</button>
            <button onClick={updateRun3}>Sixes</button>
        </div>
    )
}