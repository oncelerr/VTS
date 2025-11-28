import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUsBTN = () => {
	const navigate = useNavigate();

	return (
		<button
			style={{ 
				backgroundColor: "#fff", 
				color: "#000", 
				padding: "14px 24px", 
				border: "none", 
				borderRadius: "20px", 
				cursor: "pointer",
				fontFamily: 'Helvetica Neue',
				fontSize: '16px',
				transition: "background-color 0.3s ease, color 0.3s ease",
			}}
			onMouseEnter={(e) => {
				e.target.style.backgroundColor = "#1C2D80";
				e.target.style.color = "#fff";
			}}
			onMouseLeave={(e) => {
				e.target.style.backgroundColor = "#fff";
				e.target.style.color = "#000";
			}}
			onClick={() => navigate('/contact')}
			>
				Contact Us
			</button>
	);
};

export default ContactUsBTN;