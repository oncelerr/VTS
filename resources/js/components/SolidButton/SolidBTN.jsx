import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SolidBtn = ({name, path, color, style}) => {
	const navigate = useNavigate();
	const buttonColor = color || "#1C2D80";
	
	// Track window width for responsive behavior
	const [isMobile, setIsMobile] = useState(false);
	
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 480);
		};
		
		checkMobile(); // Check on mount
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);
	
	// Check if this is a full-width button on mobile
	const isFullWidth = style?.width === '100%' || isMobile;
	
	// Adjust padding for mobile full-width buttons
	const getPadding = () => {
		if (isFullWidth && isMobile) {
			return "18px 24px"; // Keep horizontal padding on mobile
		}
		return "18px 24px"; // Default padding
	};
	
	// Get width based on mobile state
	const getWidth = () => {
		if (isMobile) {
			return "100%";
		}
		return style?.width || "fit-content";
	};
	
	return (
		<button
			style={{ 
				backgroundColor: buttonColor, 
				color: "#fff", 
				padding: getPadding(), 
				border: "none", 
				borderRadius: "8px", 
				fontFamily: "Helvetica Neue",
				fontWeight: "bold",
				fontSize: "16px",
				cursor: "pointer",
				width: getWidth(),
				transition: "background-color 0.3s ease",
				boxSizing: "border-box", // Ensure proper box sizing
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