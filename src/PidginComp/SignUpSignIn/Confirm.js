import React from "react";
import styled from "styled-components";

const Confirm = () => {
	return (
		<center style={ { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }
		}>
			<Card>
				<h1>Go check your mail</h1>
				<Diva>
					Your Account has been created, Please Check your inbox to Verify your
					account and continue
				</Diva>
			</Card>
		</center >
	);
};

export default Confirm;

const Diva = styled.div`
	text-align: center;
	font-weight: bold;
	font-size: 20px;
	color: #004080;
	text-transform: uppercase;
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 300px;
	/* height: 100%; */
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	flex-direction: column;
	position: relative;

	::before{
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: red;

		z-index: -1;
		transform: scale(1);
		transform-origin: center;
		transition: all .7s;
	}

	:hover::before{
		transform: scale(0);
	}
`;
