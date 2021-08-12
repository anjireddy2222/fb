import { useHistory } from 'react-router-dom';
import Linkify from 'react-linkify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react/cjs/react.development';

function Post({ postData }) {
	// variables
	var [data, setData] = useState(postData);
	var [showComments, setShowComments] = useState(false);
	var [loggedinUserName, setLoggedInUserName] = useState(localStorage.getItem('userName'));
	var [loggedinUserPic, setLoggedInUserPic] = useState(localStorage.getItem('userPic'));
	var [commentText, setCommentText] = useState('');
	var [comments, setComments] = useState(data.commentsList);

	function updateCommentText(e) {
		setCommentText(e.target.value);
	}

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

	function toggleComments() {
		setShowComments(true);
	}

	function checkForEnter(e) {
		if (e.key == 'Enter') {
			var newComment = {
				name: loggedinUserName,
				imagePath: loggedinUserPic,
				comment: commentText,
			};
			var newArray = [...comments];
			newArray.push(newComment);
			setComments(newArray);
		}
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
				<div className='col-6 text-end p-2'>
					<div class='btn-group'>
						<button
							type='button'
							class='btn btn-link dropdown-toggle text-white'
							href='#'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<span className='text-secondary'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-three-dots-vertical'
									viewBox='0 0 16 16'>
									<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
								</svg>
							</span>
						</button>

						<div class='dropdown-menu shadow border-0' aria-labelledby='navbarDropdown'>
							<a class='dropdown-item' href='#'>
								Share
							</a>
							<a class='dropdown-item' href='#'>
								Save
							</a>
						</div>
					</div>
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
						<button className='btn btn-light' onClick={(e) => toggleComments()}>
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

			{showComments == true && (
				<div className='card-body'>
					<div className='flex'>
						<img src={loggedinUserPic} className='rounded-circle img-28' />
						<input
							type='text'
							className='form-control ms-2  fb-comment-textbox-radius'
							onKeyDown={(e) => checkForEnter(e)}
							placeholder='Comment'
							onChange={(e) => updateCommentText(e)}
						/>
					</div>
					{comments.map((item) => (
						<div className='flex pt-3'>
							<img className='rounded-circle img-28' src={item.imagePath} />
							<div className='fb-bg-comment ms-2 p-2 fb-comment-radius'>
								<div>
									<small className='font-weight-700'>{item.name}</small>
								</div>
								<small>{item.comment}</small>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Post;
