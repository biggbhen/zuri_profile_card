import React from 'react';
import Button from '../../component/Button/Button';
import ProfileImage from '../../assets/DisplayPhoto.jpg';
import { MyCard } from './ProfileCardStyle';
import slack from '../../assets/slack.png';
import github from '../../assets/Icon.png';
import zuri from '../../assets/zuri.png';
import I4G from '../../assets/I4G.png';
import share from '../../assets/share.png';
import shareMobile from '../../assets/shareMobile.png';

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
			</div>
			<div className='socials'>
				<img
					src={slack}
					alt='slack'
					style={{ marginRight: '1.5rem' }}
					id='slack'
				/>
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
