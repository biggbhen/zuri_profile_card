import styled from 'styled-components';

export const MyCard = styled.div`
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
	color: #b3b8cd;
	padding-top: 30px;
	position: relative;
	width: 350px;
	max-width: 100%;
	text-align: center;
	.mentor {
		color: #231e39;
		background-color: #febb0b;
		border-radius: 3px;
		font-size: 14px;
		font-weight: bold;
		padding: 3px 7px;
		position: absolute;
		top: 30px;
		left: 30px;
	}
	.round {
		border: 1px solid #03bfcb;
		border-radius: 50%;
		padding: 7px;
		width: 120px;
		height: 120px;
		margin: auto;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			object-fit: center;
		}
	}
	h3 {
		margin-top: 10px;
	}
	p {
		font-size: 14px;
		margin-top: 4px;
	}
	button.primary {
		background-color: #03bfcb;
		border: 1px solid #03bfcb;
		border-radius: 3px;
		color: #231e39;
		font-family: Montserrat, sans-serif;
		font-weight: 500;
		padding: 10px 25px;
		margin-top: 1rem;
		margin-right: 0.5rem;
	}
	.myTwitter {
		text-decoration: none;
		color: #231e39;
	}
	button.primary.ghost {
		background-color: transparent;
		color: #02899c;
		cursor: pointer;
	}
	.contactLink {
		text-decoration: none;
		color: #03bfcb;
	}
	.slackUser {
		visibility: hidden;
	}
	// button.primary.ghost:hover {
	//   background-color: #03bfcb;
	//   color: #231e39;
	// }
	.myLinks {
		background-color: #1f1a36;
		text-align: left;
		padding: 15px;
		margin-top: 30px;
	}
`;
