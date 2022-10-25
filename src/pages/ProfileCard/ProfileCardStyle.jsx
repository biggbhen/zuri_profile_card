import styled from 'styled-components';

export const MyCard = styled.div`
	margin: 1rem auto 1rem auto;
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 4px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
	color: #b3b8cd;
	padding: 1.875rem 0;
	position: relative;
	width: 1000px;
	max-width: 95%;
	text-align: center;

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

	.myLinks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 15px;
		margin-top: 1rem;
	}
	.socials {
		// border: 1px solid white;
		margin-top: 1rem;
	}
	footer {
		border-top: 1px solid rgb(255, 255, 255, 0.3);
		padding: 15px;
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
