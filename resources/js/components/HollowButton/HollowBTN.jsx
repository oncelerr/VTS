import React from "react";
import { useNavigate } from "react-router-dom";

const HollowBtn = ({name, path, color}) => {
	const navigate = useNavigate();
	
	const getHoverTextColor = (color) => {
		if (color === "#FFFFFF" || color === "FFFFFF" || color === "#fff" || color === "fff") {
			return "#181818";
		}
		if (color === "#181818" || color === "181818") {
			return "#fff";
		}
		return color;
	};
	
	return (
		<button
			style={{ 
				backgroundColor: "transparent",
				color: color, 
				padding: "18px 24px", 
				border: "1px solid " + color, 
				borderRadius: "8px", 
				cursor: "pointer",
				fontFamily: "Helvetica Neue",
				fontWeight: "bold",
				fontSize: "16px",
				zIndex: 2,
				textAlign: 'center',
				transition: "background-color 0.3s ease, color 0.3s ease"
			}}
			onMouseEnter={(e) => {
				if (color === "#FFFFFF" || color === "FFFFFF" || color === "#fff" || color === "fff" || color === "#181818" || color === "181818") {
					e.target.style.backgroundColor = color;
					e.target.style.color = getHoverTextColor(color);
				}
			}}
			onMouseLeave={(e) => {
				e.target.style.backgroundColor = "transparent";
				e.target.style.color = color;
			}}
			onClick={() => navigate(path)}
			>
				{name}
			</button>
	);
};

export default HollowBtn;