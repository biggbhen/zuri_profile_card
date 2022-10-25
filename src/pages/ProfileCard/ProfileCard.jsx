import React from 'react';
import Button from '../../component/Button/Button';
import ProfileImage from '../../assets/DisplayPhoto.jpg';
import { MyCard } from './ProfileCardStyle';
import slack from '../../assets/slack.png';
import github from '../../assets/Icon.png';
import zuri from '../../assets/zuri.png';
import I4G from '../../assets/I4G.png';

const ProfileCard = () => {
	return (
		<MyCard>
			{/* <span class='mentor'>MENTOR</span> */}
			<div className='round'>
				<img src={ProfileImage} alt='Display' id='profile__img' />
			</div>
			<h3>BiggKodes</h3>
			<p>Frontend Engineer</p>

			{/* Buttons Links */}
			<div className='myLinks'>
				<Button
					text={'Twitter'}
					btnId={'btn__zuri'}
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
			<div className='socials'>
				<img src={slack} alt='slack' style={{ marginRight: '1.5rem' }} />
				<img src={github} alt='github' />
			</div>
			<footer>
				<div>
					<img src={zuri} alt='zuri' />
				</div>
				<p>HNG Internship 9 Frontend Task</p>
				<div>
					<img src={I4G} alt='i4g' />
				</div>
			</footer>
		</MyCard>
	);
};

export default ProfileCard;
