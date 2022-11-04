import React from 'react';
import Input from '../../component/input/Input';
import { Form, Textarea } from './contactStyle';

const Contact = () => {
	return (
		<Form>
			<h1>Contact Me</h1>
			<p>Hi there, contact me to ask me about anything you have in mind</p>
			<Input
				type={'text'}
				placeholder={'enter your first name'}
				label={'First Name'}
			/>
			<Input
				type={'text'}
				placeholder={'enter your last name'}
				label={'Last Name'}
			/>
			<Input
				type={'email'}
				placeholder={'yourname@email.com'}
				label={'Email'}
			/>
			<Textarea>
				<label htmlFor='message'>message</label>
				<textarea id='message' />
			</Textarea>
		</Form>
	);
};

export default Contact;
