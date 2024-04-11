import "./tsignup.css";
import rightArrow from "../../../images/Right.svg";
import leftArrow from "../../../images/Left.svg";
function Login() {
	const roles = [
		"Software Engineer",
		"QA Engineer",
		"Product Manager",
		"Data Analyst",
		"Data Scientist",
		"Business Analyst",
		"Sales Manager",
		"Marketing Manager",
		"HR Manager",
		"Recruiter",
		"Customer Support",
		"Customer Success",
		"Account Manager",
		"Accountant",
		"Finance Manager",
		"Legal Counsel",
		"Lawyer",
		"Paralegal",
		"Nurse",
		"Doctor",
		"Pharmacist",
		"Teacher",
		"Professor",
		"Principal",
		"Dean",
	];
	return (
		<div className="center">
			<div className="card-container">
				<div className="title">
					<h2>Roles</h2>
				</div>
				<div className="description">
					<p>
						Select the industries that align best with your
						interests, knowledge, experience, and wishes.{" "}
					</p>
				</div>
				<div className="form-container">
					<form>
						{roles.map((role, index) => (
							<div key={index} className="hidden">
								<input
									type="checkbox"
									id={role}
									className="hidden"
									s
								/>
								<label htmlFor={role} className="industryLabel">
									{" "}
									{role}{" "}
								</label>
							</div>
						))}
					</form>
				</div>
				<div className="navigation-container">
					<button>
						<img src={leftArrow} alt="arrow" />
						Previous
					</button>
					<p>2/5</p>
					<button>
						Next
						<img src={rightArrow} alt="arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}
