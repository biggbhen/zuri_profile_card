import React from 'react';
import { MyButton } from './ButtonStyle';

const Button = ({ btnId, btnLink, text }) => {
	return (
		<MyButton id={btnId}>
			<a href={btnLink} target='_blank' rel='noreferrer'>
				{text}
			</a>
		</MyButton>
	);
};

export default Button;
