import React from 'react';
import Input from '../../component/input/Input';
import { Checkbox, Form, Textarea, Grid, FormButton } from './contactStyle';

const Contact = () => {
	return (
		<Form>
			<h1>Contact Me</h1>
			<p>Hi there, contact me to ask me about anything you have in mind</p>
			<Grid>
				<Input
					type={'text'}
					placeholder={'enter your first name'}
					label={'first name'}
					id={'first_name'}
				/>
				<Input
					type={'text'}
					placeholder={'enter your last name'}
					label={'last name'}
					id={'last_name'}
				/>
				<Input
					className='email-input'
					type={'email'}
					placeholder={'yourname@email.com'}
					label={'email'}
					id={'email'}
				/>
				<Textarea className='textarea'>
					<label htmlFor='message'>message</label>
					<textarea
						rows={'7'}
						id='message'
						placeholder={
							"Send me a message and I'll reply you as soon as possible..."
						}></textarea>
				</Textarea>
			</Grid>
			<Checkbox>
				<input type='checkbox' />
				<label htmlFor='checkbox'>
					You agree to providing your data to Biggkodes who may contact you.
				</label>
			</Checkbox>
			<FormButton id='btn_submit'>send message</FormButton>
		</Form>
	);
};

export default Contact;
