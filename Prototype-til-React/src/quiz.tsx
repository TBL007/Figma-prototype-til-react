import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

const Questions = [
    {
        id: 1,
        question: "Hvor rask er en hypsilophodon?",
        svaralternativer: [
            "10 km/t", "20km/t", "30km/t", "40km/t"
        ],
        svar: 3
    },
     {
        id: 2,
        question: "liker du hypsilophodoner?",
        svaralternativer: [
            "nei", "ja", "nja", "er ikke sikker"
        ],
        svar: 1
    }
]

export function Quiz() {
    const Navigate = useNavigate()
    return (
        <div>
            <button onClick={() => Navigate("/quiz-1")}>Start quiz</button>
        </div>
    )
}

function Quiz_component({ id }: { id: number }) {
    const navigate = useNavigate()
    const question = Questions[id - 1]
    const [displaycorrect,setDisplayCorrect]=useState(false)
    const handleAnswer = (index:Number) => {
        if (index === question.svar) {
            setDisplayCorrect(true)
        }
    }

    function Correct(){
        
        const handleNav = () => {
            setDisplayCorrect(false)
            navigate(`/quiz-${question.id+1}`, {replace:true})
        }
        
        if (displaycorrect) 
            return(
            <div>
            <h2>Correct</h2>
            <button onClick={handleNav}>Next</button>
            </div>

            )
    }

    return (
        <div>
            <div className="question-header">
            <h1>{question.question}</h1>
            </div>
            <div className="question-buttons">
            {question.svaralternativer.map((alternativ, index) =>
            (
                <button onClick={() => handleAnswer(index)}>
                    {alternativ}
                </button>))}
            </div>
            <Correct />
        </div>
    )
}

export function Quiz_Routes() {
    return (
        <Routes>
            {Questions.map(question => (<Route key={question.id} path={`/quiz-${question.id}`} element={<Quiz_component id={question.id} />} />))}
        </Routes>
    )
}