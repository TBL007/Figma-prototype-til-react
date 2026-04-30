import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

const Questions = [ // svar er liste basert index starter på 0
    {
        id: 1,
        question: "Hvor rask er en hypsilophodon?",
        svaralternativer: [
            "10 km/t", "20km/t", "30km/t", "40km/t"
        ],
        svar: 3,
        answered: false
    },
    {
        id: 2,
        question: "liker du hypsilophodoner?",
        svaralternativer: [
            "nei", "ja", "nja", "er ikke sikker"
        ],
        svar: 1,
        answered: false
    },
    {
        id: 3,
        question: "isjQJW",
        svaralternativer: [
            "riktig", "feil", "feil", "feil"
        ],
        svar: 0,
        answered: false
    }
]

export function Quiz({setPoints}:{setPoints:Function}) {
    const Navigate = useNavigate()
    const handleStart = () => {
        for (const question of Questions){
            question.answered=false
        }
        setPoints(0)
        Navigate("/quiz-1")

    }
    return (
        <div className="quiz-start">
            <button onClick={handleStart}>Start quiz</button>
        </div>
    )
}

function Quiz_component({ id, setPoints, points }: { id: number, points: number, setPoints: Function }) {

    const navigate = useNavigate()
    const question = Questions[id - 1]
    const [displaycorrect, setDisplayCorrect] = useState(false)
    const [correct, setCorrect] = useState(false)
    
    const handleAnswer = (index: Number) => {
        if (question.answered) return;

        if (index === question.svar) {
            setCorrect(true)
            setDisplayCorrect(true)
            setPoints(points + 1)
        } else {
            setDisplayCorrect(true)
            setCorrect(false)
        }
        question.answered = true
    }
    const manualNav = (back: boolean) => {
        if (question.id === 1 && back) return;
        if (question.id === Questions.length && !back) return;
        navigate(`/quiz-${back ? question.id - 1 : question.id + 1}`)
    }
    function Correct() {


        const handleNav = () => {
            setDisplayCorrect(false)


            if (question.id < Questions.length) {
                navigate(`/quiz-${question.id + 1}`);
            } else {
                navigate("/quiz-done");
            }
        }

        if (displaycorrect)
            if (correct) {
                return (
                    <div className="correct">
                        <h2>Correct</h2>
                        <button onClick={handleNav}>Next</button>
                    </div>

                )
            } else {
                return (
                    <div className="correct">
                        <h2>Wrong</h2>
                        <button onClick={handleNav}>Next</button>
                    </div>

                )
            }
    }

    return (
        <div className="question">
            <div className="question-header">
                <div className="question-count">
                    <button onClick={() => manualNav(true)}> {"<"} </button>
                    <h3>{question.id}/{Questions.length}</h3>
                    <button onClick={() => manualNav(false)}> {">"} </button>
                </div>
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
    const [points, setPoints] = useState(0)
    useEffect(() => {
        const order = () => {
            Questions.sort(() => Math.random() - 0.5)
            for (const question of Questions) {
                question.id = Questions.indexOf(question) + 1
            }

        }
        order()
    },[])
    function Quiz_done() {
        return (
            <div className="quiz-start">
                <h1> Gratulere du greide</h1>
                <h1> {points}/{Questions.length}</h1>
            </div>
        )
    }
    return (
        <Routes>
            <Route path="/quiz" element={<Quiz setPoints={setPoints} />} />
            <Route path="/quiz-done" element={<Quiz_done />} />
            {Questions.map(question => (<Route key={question.id} path={`/quiz-${question.id}`} element={<Quiz_component points={points} setPoints={setPoints} id={question.id} />} />))}
        </Routes>
    )
}