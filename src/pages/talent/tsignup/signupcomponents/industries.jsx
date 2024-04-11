import "./tsignup.css";
import rightArrow from "../../../images/Right.svg";
import leftArrow from "../../../images/Left.svg";
function Industries() {
	const industries = [
		"IT",
		"Finance",
		"Healthcare",
		"Education",
		"Marketing",
		"Sales",
		"Engineering",
		"Retail",
		"Human Resources",
		"Manufacturing",
		"Legal",
		"Construction",
		"Hospitality",
		"Media",
		"Agriculture",
		"Transportation",
		"Non-profit",
		"Other",
	];
	return (
		<div className="center">
			<div className="card-container">
				<div className="title">
					<h2>Industries</h2>
				</div>
				<div className="description">
					<p>
						Select the industries that align best with your
						interests, knowledge, experience, and wishes.{" "}
					</p>
				</div>
				<div className="form-container">
					<form>
						{industries.map((industry, index) => (
							<div key={index} className="hidden">
								<input
									type="checkbox"
									id={industry}
									className="hidden"
									s
								/>
								<label
									htmlFor={industry}
									className="industryLabel">
									{" "}
									{industry}{" "}
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
export default Industries;
