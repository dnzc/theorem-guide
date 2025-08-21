'use client'

import { useState, useRef, useEffect } from 'react'

export default function Quiz({ children }) { // will have been passed through mistune-processor
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState({ correct: 0, total: 0 })
    const quizRef = useRef(null)
    
    const [isCheckButtonEnabled, setIsCheckButtonEnabled] = useState(false)
    
    // initialize check button state based on quiz type
    useEffect(() => {
        const inputTags = quizRef.current?.querySelectorAll('.quiz-input-tag') || []
        const isSingleChoice = inputTags.length > 0 && inputTags[0].type === 'radio'
        
        if (!isSingleChoice) {
            setIsCheckButtonEnabled(true)
        }
    }, [children])
    
    const handleSubmit = () => {
        if (submitted) return
        
        // calculate score by comparing form inputs with correct answers
        const inputTags = quizRef.current?.querySelectorAll('.quiz-input-tag') || []
        let correct = 0
        
        // detect if this is a single-choice quiz (radio buttons) or multi-choice (checkboxes)
        const isSingleChoice = inputTags.length > 0 && inputTags[0].type === 'radio'
        
        inputTags.forEach((tag) => {
            const isCorrect = tag.dataset.correct === 'true'
            const userAnswer = tag.checked
            
            if (userAnswer === isCorrect) {
                correct++
            }
        })
        
        setScore({ correct, total: inputTags.length, isSingleChoice })
        setSubmitted(true)
        
        // update visual feedback
        inputTags.forEach((tag) => {
            tag.disabled = true
        })
        const question = quizRef.current?.querySelector('.quiz-question') || []
        question.classList.add('opacity-50')
        
        // disable hover on labels when submitted
        const labels = quizRef.current?.querySelectorAll('.quiz-option-label') || []
        labels.forEach((label) => {
            label.classList.add('pointer-events-none')
        })
    }
    
    const reset = () => {
        setSubmitted(false)
        setScore({ correct: 0, total: 0, isSingleChoice: false })
        
        const inputTags = quizRef.current?.querySelectorAll('.quiz-input-tag') || []
        const isSingleChoice = inputTags.length > 0 && inputTags[0].type === 'radio'
        
        // reset check button state based on quiz type
        setIsCheckButtonEnabled(!isSingleChoice)
        
        const initialAnswers = {}
        
        inputTags.forEach((tag, index) => {
            initialAnswers[index] = false
            tag.checked = false
            tag.disabled = false
        })

        const question = quizRef.current?.querySelector('.quiz-question') || []
        question.classList.remove('opacity-50')
        
        // re-enable hover on labels when reset
        const labels = quizRef.current?.querySelectorAll('.quiz-option-label') || []
        labels.forEach((label) => {
            label.classList.remove('pointer-events-none')
        })
    }
    
    // check for selections on any input change
    const handleInputChange = () => {
        const inputTags = quizRef.current?.querySelectorAll('.quiz-input-tag') || []
        const isSingleChoice = inputTags.length > 0 && inputTags[0].type === 'radio'
        
        if (isSingleChoice) {
            // for radio buttons, check if any is selected
            const anySelected = Array.from(inputTags).some(tag => tag.checked)
            setIsCheckButtonEnabled(anySelected)
        } else {
            // for checkboxes, always allow submission
            setIsCheckButtonEnabled(true)
        }
    }

    return (
        <div ref={quizRef} className="max-w-2xl mx-auto p-4 pt-2 mt-4 bg-background border-2 border-border-subtle rounded-lg" onChange={handleInputChange}>
            <div className="quiz-question">
                {children}
            </div>
            
            {!submitted && (
                <div className="text-center mt-2">
                    <button
                        onClick={handleSubmit}
                        disabled={!isCheckButtonEnabled}
                        className={`px-6 py-2 font-bold rounded-lg ${
                            isCheckButtonEnabled 
                                ? 'bg-Quiz-button hover:bg-Quiz-button-hover' 
                                : 'bg-gray-300 cursor-not-allowed opacity-50'
                        }`}
                    >
                        Check
                    </button>
                </div>
            )}
            
            {submitted && (
                <div className="mt-2 p-4 border-2 border-border-subtle rounded-xl">
                    <div className="text-center">
                        
                        {score.isSingleChoice && (
                            <p className="mb-2">
                                {score.correct === score.total ?
                                    <span className="text-Quiz-success">
                                        <span className="font-bold">Correct</span> - well done!
                                    </span>
                                :
                                    <span className="text-Quiz-failure">
                                        <span className="font-bold">Incorrect</span> - keep practicing!
                                    </span>
                                }
                            </p>
                        )}
                        {!score.isSingleChoice && (
                            <p className="text-xl mb-2 font-bold">{score.correct}/{score.total} answers correct</p>
                        )}
                        {!score.isSingleChoice && score.correct === score.total && (
                            <p className="text-Quiz-success font-bold flex items-center justify-center space-x-1">
                                <span>Perfect score!</span>
                            </p>
                        )}
                        {!score.isSingleChoice && score.correct >= score.total * 0.8 && score.correct < score.total && (
                            <p className="text-Quiz-success flex items-center justify-center space-x-1">
                                <span>Great job!</span>
                            </p>
                        )}
                        {!score.isSingleChoice && score.correct < score.total * 0.8 && (
                            <p className="text-Quiz-failure flex items-center justify-center space-x-1">
                                <span>Keep practicing!</span>
                            </p>
                        )}
                        
                        
                        <div className="mt-4">
                            <button
                                onClick={reset}
                                className="px-6 py-2 bg-button font-bold rounded-lg hover:bg-button-hover"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}