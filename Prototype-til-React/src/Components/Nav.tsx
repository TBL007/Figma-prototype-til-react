import { useLocation, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import "../styles/nav.css"
export default function Nav(){
    const Navigate = useNavigate()
    const [ishome, setIshome] = useState(true)
    const location = useLocation().pathname
    useEffect(()=>{
        if (location === "/") {
            setIshome(true)
        } else {
            setIshome(false)
        }
    },[location])
    return(
        <div className="nav">
            <nav>
                
                <button onClick={()=>Navigate("/")}>
                    <img src={ishome?"nav/home_fill.png":"nav/home.png"}/>
                </button>
                <button onClick={()=>Navigate("/quiz")}>
                    <img src={ishome?"nav/quiz.png":"nav/quiz_fill.png"}/>
                </button>
            </nav>
        </div>
    )
}