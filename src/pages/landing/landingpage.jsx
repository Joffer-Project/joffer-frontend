import * as React from "react";
import "./landpage.css";
const TalentSection = () => {
	return (
		<section className="talent-section">
			<div className="talent-content">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/349182bd2c56ab027023d979c48e3b86953b07cec1a23a8633c83a43a7a32040?apiKey=d5d118b7190b41549398dbbdd251edfc&"
					alt=""
					className="talent-background"
				/>
				<div className="talent-text">
					<h2 className="talent-title">Talent</h2>
					<p className="talent-description">
						For the ones who seek new job opportunities!
					</p>
				</div>
			</div>
		</section>
	);
};

const RecruiterSection = () => {
	return (
		<section className="recruiter-section">
			<div className="recruiter-content">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec64a07570cf11a760cf05b9a029f1cf141fa05bb5027d9a83814da73b14446c?apiKey=d5d118b7190b41549398dbbdd251edfc&"
					alt=""
					className="recruiter-background"
				/>
				<div className="recruiter-text">
					<h2 className="recruiter-title">Recruiter</h2>
					<p className="recruiter-description">
						For the ones who seek new talents to work with!
					</p>
				</div>
			</div>
		</section>
	);
};

function MyComponent() {
	return (
		<main className="main-container">
			<img
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c75d851045a15b83c8280f0c36bb4b5f2846672fa1577bb98cea20dc462c66?apiKey=d5d118b7190b41549398dbbdd251edfc&"
				alt="Your professional matchmaker!"
				className="logo"
			/>
			<h1 className="tagline">Your professional matchmaker!</h1>
			<div className="sections-container">
				<TalentSection />
				<RecruiterSection />
			</div>
		</main>
	);
}

export default MyComponent();
