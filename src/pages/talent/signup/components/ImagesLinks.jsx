import React from "react";
import "../styles/ImagesLinks.css";

const ImagesLinks = ({ form }) => {
    return (
        <div className="il-images-links-container">
            <div className="il-images-section">
                <h2 className="il-section-title">Images</h2>
                <div className="il-input-group">
                    <div className="il-input-container">
                        <label htmlFor="profileImage" className="il-input-label">Profile Image</label>
                        <input type="file" id="profileImage" name="profileImage" className="il-input-field" />
                    </div>
                    <div className="il-input-container">
                        <label htmlFor="coverImage" className="il-input-label">Cover Image</label>
                        <input type="file" id="coverImage" name="coverImage" className="il-input-field" />
                    </div>
                </div>
            </div>
            <div className="il-links-section">
                <h2 className="il-section-title">Links</h2>
                <div className="il-input-group">
                    <div className="il-input-container">
                        <label htmlFor="dribbbleLink" className="il-input-label">Dribbble</label>
                        <input type="text" id="dribbbleLink" name="dribbbleLink" className="il-input-field" />
                    </div>
                    <div className="il-input-container">
                        <label htmlFor="githubLink" className="il-input-label">Github</label>
                        <input type="text" id="githubLink" name="githubLink" className="il-input-field" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesLinks;