import { useHistory } from 'react-router-dom';
import Linkify from 'react-linkify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react/cjs/react.development';

function Post({ postData }) {
	// variables
	var [data, setData] = useState(postData);

	function imgClickhandle() {
		window.location = data.linkData.url;
	}

	function handleLike() {
		var newData = { ...data };

		if (newData.isLiked == true) {
			newData.isLiked = false;
		} else {
			newData.isLiked = true;
		}
		setData(newData);
	}

	// HTML
	return (
		<div className='card fb-post-shadow m-3'>
			<div className='row'>
				<div className='col-6'>
					<div className='flex pt-3 ps-2'>
						<img src={data.userData.imgPath} className='rounded-circle fb-post-profile-size' />
						<p className='font-weight-700 ps-2 hover-underline pointer'>
							{data.userData.name} <br />
							<small className='text-secondary font-weight-400 font-12'>{data.postedOn}</small>
						</p>
					</div>
				</div>
				<div className='col-6'>
					<div class='dropdown me-1'>
						<button
							type='button'
							class='btn btn-secondary dropdown-toggle'
							id='dropdownMenuOffset'
							data-bs-toggle='dropdown'
							aria-expanded='false'
							data-bs-offset='10,20'>
							Offset
						</button>
						<ul class='dropdown-menu' aria-labelledby='dropdownMenuOffset'>
							<li>
								<a class='dropdown-item' href='#'>
									Action
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Another action
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Something else here
								</a>
							</li>
						</ul>
					</div>
					{/* <svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-three-dots-vertical'
						viewBox='0 0 16 16'>
						<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
					</svg> */}
				</div>
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
				<hr />
				<div className='row'>
					<div className='col-4 text-center'>
						<button className={data.isLiked == true ? 'btn btn-light text-primary' : 'btn btn-light'} onClick={(e) => handleLike()}>
							<FontAwesomeIcon icon={faThumbsUp} /> &nbsp;&nbsp;Like
						</button>
					</div>
					<div className='col-4 text-center'>
						<button className='btn btn-light'>
							<FontAwesomeIcon icon={faCommentAlt} />
							&nbsp;&nbsp; Comment
						</button>
					</div>
					<div className='col-4 text-center'>
						<button className='btn btn-light'>
							<FontAwesomeIcon icon={faShare} />
							&nbsp;&nbsp; Share
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
