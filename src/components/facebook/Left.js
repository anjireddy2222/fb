import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Left() {
	// variables
	var route = useHistory();

	useEffect(() => {
		function getLeftLinks() {
			var form = new FormData();
			form.append('userid', '125478');
		}
	}, []);

	var [leftLinks, setLeftLinks] = useState([
		{
			linkTitle: 'Anji Reddy',
			imagePath:
				'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.6435-1/cp0/c10.0.60.60a/p60x60/48384456_2537519412984825_3925785028360929280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CQLoF8-k2SgAX-7y1A8&_nc_ht=scontent.fhyd13-1.fna&oh=0df332505ef1c35c094655cfb3896da8&oe=611F1BA6',
			linkURL: '/anjireddy.akkala',
		},
		{
			linkTitle: 'Covid-19 information center',
			imagePath:
				'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.6435-1/cp0/c10.0.60.60a/p60x60/48384456_2537519412984825_3925785028360929280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CQLoF8-k2SgAX-7y1A8&_nc_ht=scontent.fhyd13-1.fna&oh=0df332505ef1c35c094655cfb3896da8&oe=611F1BA6',
			linkURL: '/covid-info',
		},
		{
			linkTitle: 'Friends',
			imagePath:
				'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.6435-1/cp0/c10.0.60.60a/p60x60/48384456_2537519412984825_3925785028360929280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CQLoF8-k2SgAX-7y1A8&_nc_ht=scontent.fhyd13-1.fna&oh=0df332505ef1c35c094655cfb3896da8&oe=611F1BA6',
			linkURL: '/friends',
		},
	]);

	function hanldeLinkClick(linkURL) {
		route.push(linkURL);
	}

	//HTML
	return (
		<div className='col-3 p-2'>
			{leftLinks.map((item) => (
				<div className='ps-3 pt-1 pb-1 flex left-links rounded pointer' onClick={(e) => hanldeLinkClick(item.linkURL)}>
					<img className='rounded-circle img-28' src={item.imagePath} />
					<h6 className='ps-3 pt-1 font-weight-700'>{item.linkTitle}</h6>
				</div>
			))}
		</div>
	);
}

export default Left;
