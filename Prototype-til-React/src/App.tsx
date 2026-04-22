import { useState } from "react"

import "./styles/index.css"



const Texts  = [
  {
    tittle:"Lorem ipsum",
    text:"Lorem ipsum"
  },
  {
    tittle:"Lorem ipsum",
    text:"Lorem ipsum"
  }
]

const funfacts = [
    "Lorem ipsum", 
    "dolor"
]
export default function App() {
  const [DisplayFunfacts, setDisplayfunfacts] = useState(false)

    function Funfacts(){
      if (!DisplayFunfacts) {
          return <div></div>
      } else{
      return(
          <div className="fun-facts">
              <h1>Fun facts</h1>
              {funfacts.map(funfact=>(<p>{funfact}</p>))}
          </div>
      )}
  }
  return(
    <div  className="main">
      
      <img className="hypsilophodon" src="bilder/Hypsilophodon.jpg"/>
      <div className="texts">
        {Texts.map(text=>(
          <div className="text">
            <h2>{text.tittle}</h2>
            <div ><p>{text.text}</p></div>
          </div>))}
      </div>
      
      <button className="Fun-facts-button" onClick={()=>setDisplayfunfacts(!DisplayFunfacts)}>Fun facts</button>
      <Funfacts/>
    </div>
  )
}