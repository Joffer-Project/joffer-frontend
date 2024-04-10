import React from "react";
import "./tlogin.css";
import orangeHolder from "../../../images/orange-left-img-color-holder.webp";

const BackgroundCarousel = () => {
	return (
		<div className="card">
			<div className="background">
				<img
					src={orangeHolder}
					alt="Orange color holder"
					className="orange-holder background-img"
				/>
			</div>
			<div className="carousel">
				<div className="image-container">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc01476b47dbea3fbf17a8c765eb297f1fa0f9a65b680cf58791fc619a676cb?apiKey=d5d118b7190b41549398dbbdd251edfc&"
						alt="Product Image"
						className="orange-holder"
					/>
				</div>
			</div>
		</div>
	);
};

export default BackgroundCarousel;
