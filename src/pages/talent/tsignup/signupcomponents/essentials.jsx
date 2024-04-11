import rightArrow from "../../../images/Right.svg";
import "./essentials.css";
function Essentials() {
	return (
		<div className="center">
			<div className="card-container">
				<div className="title">
					<h2>Essentials</h2>
				</div>
				<div className="form-container">
					<form>
						<div>
							<input type="text" placeholder="Name" />
						</div>
						<div>
							<input type="email" placeholder="Email" />
						</div>
						<div>
							<input type="password" placeholder="Password" />
						</div>
						<div>
							<input
								type="Password"
								placeholder="Repeat you password"
							/>
						</div>
					</form>
				</div>
				<div className="navigation-container">
					<p>1/5</p>
					<button>
						Next
						<img src={rightArrow} alt="arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Essentials;
