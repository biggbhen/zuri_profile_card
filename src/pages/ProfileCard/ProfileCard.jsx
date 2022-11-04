import React from 'react';
import Button from '../../component/Button/Button';
import ProfileImage from '../../assets/DisplayPhoto.jpg';
import { MyCard } from './ProfileCardStyle';
import slack from '../../assets/slack.png';
import github from '../../assets/Icon.png';
import share from '../../assets/share.png';
import shareMobile from '../../assets/shareMobile.png';
import { NavLink } from 'react-router-dom';
import { MyButton } from '../../component/Button/ButtonStyle';

const ProfileCard = () => {
	return (
		<MyCard>
			<div className='shareIcon'>
				<img src={share} className='share' alt='share' />
				<img src={shareMobile} className='shareMobile' alt='shareMobile' />
			</div>
			<div className='round'>
				<img src={ProfileImage} alt='Display' id='profile__img' />
			</div>
			<h3>Ugochukwu Benjamin</h3>
			<h3 id='slack' style={{ display: 'none' }}>
				biggkodes
			</h3>

			{/* Buttons Links */}
			<div className='myLinks'>
				<Button
					text={'Twitter'}
					btnId={'twitter'}
					btnLink={'https://twitter.com/Bigg_kodes'}
				/>
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
						'https://books.zuri.team/python-for-beginners?ref_id=<biggkodes>'
					}
				/>
				<Button
					text={'Background Check for Coders'}
					btnId={'pitch'}
					btnLink={'https://backgroundcheck.zuri.team'}
				/>
				<Button
					text={'Design Books'}
					btnId={'book__design'}
					btnLink={'https://books.zuri.team/design-rules'}
				/>
				<NavLink to='/contact'>
					<MyButton id='contact'>Contact me</MyButton>
				</NavLink>
			</div>

			<div className='socials'>
				<img src={slack} alt='slack' style={{ marginRight: '1.5rem' }} />
				<img src={github} alt='github' />
			</div>
		</MyCard>
	);
};

export default ProfileCard;
