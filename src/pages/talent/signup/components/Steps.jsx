import React from 'react';
import "../styles/Steps.css";

const Steps = ({ step = 1, setStep }) => {
    return (
        <div className="steps-container">
            {step > 1 && (
                <button type="button" className="step-button" onClick={() => setStep(step - 1)}>
                    <span className="step-icon">&#9664;</span> Previous
                </button>
            )}

            {step === 5 ? (
                <button type="button" className="step-button">
                    Preview <span className="step-icon">👁️</span>
                </button>
            ) : (
                <div className="step-number">{step}/5</div>
            )}

            {step === 5 ? (
                <button type="button" className="step-button">
                    Start
                </button>
            ) : (
                <button type="button" className="step-button" onClick={() => setStep(step + 1)}>
                    Next <span className="step-icon">&#9654;</span>
                </button>
            )}
        </div>
    );
}

export default Steps;