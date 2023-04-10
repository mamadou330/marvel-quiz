import React, {useRef, useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Landing = () => {
    const refwolverine = useRef(null);

    const [btn, setBtn] = useState(false);

    useEffect(() => {
        refwolverine.current.classList.add("startingImg");
    
        setTimeout(() => {
           refwolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000);
    }, [])

    const setLetImg = () => {
        refwolverine.current.classList.add("leftImg");

    }

    
    const setRightImg = () => {
        refwolverine.current.classList.add("rightImg");
        
    }
    const clearImg = () => {
        if(refwolverine.current.classList.contains("leftImg")) {
            refwolverine.current.classList.remove("leftImg");
        }

        if (refwolverine.current.classList.contains("rightImg")) {
            refwolverine.current.classList.remove("rightImg");
        }

    }

    const displayBtn = btn && (
        <>
            <div onMouseOver={setLetImg} onMouseOut={clearImg} className="leftBox">
                <Link to="/signup" className='btn-welcome'>Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link to="/login" className='btn-welcome'>Connexion</Link>
            </div>
        </>
    )

    return (
        <main ref={refwolverine} className='welcomePage'>
           { displayBtn }
        </main>
    )
}

export default Landing
