import { useHistory } from 'react-router-dom';
import Linkify from 'react-linkify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Post({ data }) {
	// variables

	function imgClickhandle() {
		window.location = data.linkData.url;
	}

	// HTML
	return (
		<div className='card mt-2 fb-post-shadow'>
			<div className='flex pt-3 ps-2'>
				<img src={data.userData.imgPath} className='rounded-circle fb-post-profile-size' />
				<p className='font-weight-700 ps-2 hover-underline pointer'>
					{data.userData.name} <br />
					<small className='text-secondary font-weight-400 font-12'>{data.postedOn}</small>
				</p>
			</div>
			<div className='card-body'>
				<p>
					<Linkify>{data.text}</Linkify>
				</p>
			</div>
			{data.isLink == true && <img src={data.imgPath} className='pointer' onClick={(e) => imgClickhandle()} />}
			{data.isLink == true && (
				<div className='card-body bg-light pointer' onClick={(e) => imgClickhandle()}>
					<span className='text-caps'>
						<small>{data.linkData.websiteName}</small>
					</span>
					<br />
					<span className='font-weight-700 font-18'>{data.linkData.title}</span> <br />
					<small>{data.linkData.desc}</small>
				</div>
			)}
			<div className='card-body'>
				<div className='row'>
					<div className='col-6'>
						<span className='text-primary'>
							<FontAwesomeIcon icon={faThumbsUp} />
						</span>{' '}
						&nbsp;<span className='hover-underline pointer'>{data.likes}</span>
					</div>
					<div className='col-6 text-end'>
						<span className='hover-underline pointer'>&nbsp;{data.comments} Comments </span>&nbsp; &nbsp;
						<span className='hover-underline pointer'>&nbsp;{data.shares} Shares </span>&nbsp; &nbsp;
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
