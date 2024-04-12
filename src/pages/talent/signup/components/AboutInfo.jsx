import React from "react";
import "../styles/AboutInfo.css";

const AboutInfo = ({ form }) => {
    return (
        <>
            <h2 className="ai-heading ai-bold ai-text3xl ai-orange">Final step</h2>
            <p className="ai-medium ai-textxl ai-mb6">Share some information about your career path. Remember to keep it direct, these pieces of information can place you ahead.</p>
            <div className="ai-formGroup">
                <label htmlFor="description" className="ai-block ai-mb2">Tell us a little bit about yourself</label>
                <textarea id="description" {...form.register("description")} placeholder="Tell us a little bit about yourself" className="ai-inputField"></textarea>
            </div>
        </>
    );
};

export default AboutInfo;