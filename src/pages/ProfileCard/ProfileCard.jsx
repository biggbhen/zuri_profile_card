import React from 'react';
import Button from '../../component/Button/Button';
import ProfileImage from '../../assets/DisplayPhoto.jpg';
import { MyCard } from './ProfileCardStyle';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
	return (
		<MyCard>
			<span class='mentor'>MENTOR</span>
			<div className='round'>
				<img src={ProfileImage} alt='Display' id='profile__img' />
			</div>
			<h3>WebMekanic</h3>
			<p>Frontend Engineer</p>
			<div class='buttons'>
				<button class='primary' id='twitter'>
					<a
						className='myTwitter'
						href='https://twitter.com/webmekanic_'
						target='_blank'
						rel='noreferrer'>
						Twitter
					</a>
				</button>
				<button class='primary ghost'>
					<Link className='contactLink' to='/contact'>
						Contact
					</Link>
				</button>
				<p id='slack' className='slackUser'>
					webmekanic
				</p>
			</div>

			{/* Buttons Links */}
			<div className='myLinks'>
				<Button
					text={'Zuri Team'}
					btnId={'btn__zuri'}
					btnLink={'https://training.zuri.team'}
				/>
				<Button
					text={'Zuri Books'}
					btnId={'books'}
					btnLink={'http://books.zuri.team'}
				/>
				<Button
					text={'Python Books'}
					btnId={'book__python'}
					btnLink={
						'https://books.zuri.team/python-for-beginners?ref_id=<webmekanic>'
					}
				/>
				<Button
					text={'Background Check for Coders'}
					btnId={'pitch'}
					btnLink={'https://background.zuri.team'}
				/>
				<Button
					text={'Design Books'}
					btnId={'book__design'}
					btnLink={'book__design'}
				/>
			</div>
		</MyCard>
	);
};

export default ProfileCard;
