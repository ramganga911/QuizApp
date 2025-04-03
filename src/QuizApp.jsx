import React, { use } from 'react'
import {useState} from 'react'
import {data} from './data'
import './style.css'
function QuizApp() {
    let [index, setIndex] = useState(0)
    let [finish, setFinish] = useState(false)
    let [score, setScore] = useState(0)
    let [option, setOption] = useState('')
    const correctOption = [
  "Option1","Option1","Option1","Option1","Option1",
  "Option1","Option1","Option1","Option1","Option1",
];

    const handleNext =()=>{
        if(correctOption[index] === option){
                setScore(score+1)
            }
        if(index< data.length-1){
            setIndex(index+1)
            setOption('')
        }

        else{
            setFinish(true)
        }
    }
    if(finish){
        return (
            <div className='scorePage'>
                <h1>Quiz Finished</h1>
                <h3>Your Score is {score} of {data.length}</h3>
            </div>
        )
    }
    const handleSelect = (opt)=>{
        setOption(opt)
    }
  return (
    <div className="quizapp">
        <h1>Quiz App</h1>
        <h3>{data[index].Question}</h3>
        <ul>
        <li className= {option === 'Option1' ? "selected": ''} onClick ={()=> handleSelect('Option1')} >{data[index].Option1}</li>
        <li className= {option === 'Option2' ? "selected": ''} onClick ={()=> handleSelect('Option2')}>{data[index].Option2}</li>
        <li className= {option === 'Option3' ? "selected": ''} onClick ={()=> handleSelect('Option3')}>{data[index].Option3}</li>
        <li className= {option === 'Option4' ? "selected": ''} onClick ={()=> handleSelect('Option4')}>{data[index].Option4}</li>
        </ul>
        <button onClick={handleNext} disabled={!option} >Next</button>
        <h3>Question {index+1} out of 10</h3>
    </div>
  )
}

export default QuizApp
// import React, { useState, useEffect } from "react";
// import "./style.css";

// function QuizApp() {
//     let [index, setIndex] = useState(0);
//     let [finish, setFinish] = useState(false);
//     let [score, setScore] = useState(0);
//     let [option, setOption] = useState('');
//     let [questions, setQuestions] = useState([]);

//     // Fetch Quiz Data from API
//     useEffect(() => {
//         fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
//             .then(data => {
//                 let formattedQuestions = data.results.map(q => ({
//                     Question: q.question,
//                     options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
//                     correctAnswer: q.correct_answer
//                 }));
//                 setQuestions(formattedQuestions);
//             });
//     }, []);

//     const handleNext = () => {
//         if (questions[index].correctAnswer === option) {
//             setScore(score + 1);
//         }
//         if (index < questions.length - 1) {
//             setIndex(index + 1);
//             setOption('');
//         } else {
//             setFinish(true);
//         }
//     };

//     if (!questions.length) return <h1>Loading Quiz...</h1>;
//     if (finish) {
//         return (
//             <div className="scorePage">
//                 <h1>Quiz Finished</h1>
//                 <h3>Your Score is {score} out of {questions.length}</h3>
//             </div>
//         );
//     }

//     return (
//         <div className="quizapp">
//             <h1>Quiz App</h1>
//             <h3 dangerouslySetInnerHTML={{ __html: questions[index].Question }}></h3>
//             <ul>
//                 {questions[index].options.map((opt, i) => (
//                     <li key={i}
//                         className={option === opt ? "selected" : ""}
//                         onClick={() => setOption(opt)}
//                         dangerouslySetInnerHTML={{ __html: opt }}>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleNext} disabled={!option}>Next</button>
//             <h3>Question {index + 1} out of {questions.length}</h3>
//         </div>
//     );
// }

// export default QuizApp;
