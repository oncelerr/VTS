import React from "react";
import { useNavigate } from "react-router-dom";

const SolidBtn = ({name, path, color, style}) => {
	const navigate = useNavigate();
	const buttonColor = color || "#1C2D80";
	
	return (
		<button
			style={{ 
				backgroundColor: buttonColor, 
				color: "#fff", 
				padding: "18px 24px", 
				border: "none", 
				borderRadius: "8px", 
				fontFamily: "Helvetica Neue",
				fontWeight: "bold",
				fontSize: "16px",
				cursor: "pointer",
				width: "fit-content",
				transition: "background-color 0.3s ease",
				...style // Spread custom styles
			}}
			onMouseEnter={(e) => {
				if (buttonColor === "#1C2D80") {
					e.target.style.backgroundColor = "#162466";
				} else if (buttonColor === "#181818") {
					e.target.style.backgroundColor = "#162466";
				}
			}}
			onMouseLeave={(e) => {
				e.target.style.backgroundColor = buttonColor;
			}}
			onClick={() => navigate(path)}>
				{name}
			</button>
	);
};

export default SolidBtn;