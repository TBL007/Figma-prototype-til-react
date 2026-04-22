import "../styles/index.css"

interface Funfactstypes{
    display:Boolean
}
const funfacts = [
    "Lorem ipsum", 
    "dolor"
]

export default function Funfacts(display:Funfactstypes){
    if (!display) {
        return <div></div>
    } else{
    return(
        <div className="fun-facts">
            <h1>Fun facts</h1>
            {funfacts.map(funfact=>(<p>{funfact}</p>))}
        </div>
    )}
}