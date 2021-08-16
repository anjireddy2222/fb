import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faHome, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Nav() {
	// variables
	var [activeLinkDivStyles, setActiveLinkDivStyles] = useState('pt-3 border-bottom border-primary width-100 text-center border-3 pointer');
	var [activeH2Styles, setActiveH2Styles] = useState('font-weight-700 text-primary');

	var [inActiveLinkDivStyles, setInActiveLinkDivStyles] = useState('pt-3 width-100 text-center pointer');
	var [inActiveH2Styles, setInActiveH2Styles] = useState('font-weight-700 text-secondary');

	var [activeLinks, setActiveLinks] = useState({
		isHomeLinkActive: true,
		isPagesLinkActive: false,
		isVideoLinkActive: false,
	});

	var noOfProducts = useSelector((appData) => appData.noOfProducts);

	function handleClassUpdate(linkName) {
		if (linkName == 'pages') {
			setActiveLinks({
				isHomeLinkActive: false,
				isPagesLinkActive: true,
				isVideoLinkActive: false,
			});
		}
		if (linkName == 'home') {
			setActiveLinks({
				isHomeLinkActive: true,
				isPagesLinkActive: false,
				isVideoLinkActive: false,
			});
		}
		if (linkName == 'video') {
			setActiveLinks({
				isHomeLinkActive: false,
				isPagesLinkActive: false,
				isVideoLinkActive: true,
			});
		}
	}

	return (
		<div className='row shadow'>
			<div className='col-3 flex pl-4 pt-2 pb-1'>
				<div className='pl-3 width-50'>
					<h1 className='font-weight-700 pr-3 text-primary'>
						<FontAwesomeIcon icon={faFacebook} />
					</h1>
				</div>
				<div className='pt-2'>
					<input type='text' className='form-control rounded-pill bg-light' placeholder='Search Facebook' />
				</div>
			</div>
			<div className='col-6 flex'>
				<div
					className={activeLinks.isHomeLinkActive == true ? activeLinkDivStyles : inActiveLinkDivStyles}
					onClick={(e) => handleClassUpdate('home')}>
					<h2 className={activeLinks.isHomeLinkActive == true ? activeH2Styles : inActiveH2Styles}>
						<FontAwesomeIcon icon={faHome} /> {noOfProducts}
					</h2>
				</div>
				<div
					className={activeLinks.isPagesLinkActive == true ? activeLinkDivStyles : inActiveLinkDivStyles}
					onClick={(e) => handleClassUpdate('pages')}>
					<h2 className={activeLinks.isPagesLinkActive == true ? activeH2Styles : inActiveH2Styles}>
						<FontAwesomeIcon icon={faFlag} />
					</h2>
				</div>
				<div
					className={activeLinks.isVideoLinkActive == true ? activeLinkDivStyles : inActiveLinkDivStyles}
					onClick={(e) => handleClassUpdate('video')}>
					<h2 className={activeLinks.isVideoLinkActive == true ? activeH2Styles : inActiveH2Styles}>
						<FontAwesomeIcon icon={faVideo} />
					</h2>
				</div>
			</div>
			<div className='col-3'></div>
		</div>
	);
}

export default Nav;
