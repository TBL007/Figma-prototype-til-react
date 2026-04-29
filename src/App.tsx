import { useState } from "react"

import "./styles/index.css"



const Texts  = [
  {
    tittle:"Lorem ipsum",
    text:"Lorem ipsum",
    id:0
  },
  {
    tittle:"Lorem ipsum",
    text:"Lorem ipsum",
    id:1
  }
]

const funfacts = [
    {text:"Lorem ipsum", id:0 },
    {text:"dolor",id:1}
]
export default function App() {
  const [DisplayFunfacts, setDisplayfunfacts] = useState(false)

    function Funfacts(){
      if (!DisplayFunfacts) {
          return <div></div>
      } else{
      return(
          <div className="fun-facts">
            <div className="fun-facts-top">
              <h1>Fun facts</h1>
              <button onClick={()=>setDisplayfunfacts(false)} className="close"><img src="ikoner/close.png" width={32}/></button>
              </div>
              {funfacts.map(funfact=>(<p key={funfact.id}>{funfact.text}</p>))}
          </div>
      )}
  }
  return(
    <div  className="main">
      
      <img className="hypsilophodon" src="bilder/Hypsilophodon.jpg"/>
      <div className="texts">
        {Texts.map(text=>(
          <div key={text.id} className="text">
            <h2>{text.tittle}</h2>
            <div ><p>{text.text}</p></div>
          </div>))}
      </div>
      
      <button className="Fun-facts-button" onClick={()=>setDisplayfunfacts(!DisplayFunfacts)}>Fun facts</button>
      <Funfacts/>
    </div>
  )
}