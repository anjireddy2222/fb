import { useState } from 'react/cjs/react.development';
import Post from './Post';

function Content() {

	localStorage.setItem('userName', 'Anji Reddy');
	localStorage.setItem(
		'userPic',
		'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.6435-1/cp0/c10.0.60.60a/p60x60/48384456_2537519412984825_3925785028360929280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CQLoF8-k2SgAX-7y1A8&_nc_ht=scontent.fhyd13-1.fna&oh=0df332505ef1c35c094655cfb3896da8&oe=611F1BA6'
	);

	// varibales
	var [posts, setPosts] = useState([
		{
			text: 'Shoutout to Chatwoot (YC W21) on their $1.6m seed round to make it easier for business to connect with their customers! Chatwoot challenges Zendesk with open source customer engagement platform: \n http://ow.ly/7huw50FNxW2',
			imgPath:
				'https://external.fhyd13-1.fna.fbcdn.net/safe_image.php?d=AQH8Wlm5bgX1SgJH&w=500&h=261&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F610ae1b427756145133a70c2%2F442ec90be408dd5386f9cbd45fe203a7d5223d2a_310b30bfeb3a473f15ce00050ba1cce8483af291_facebook&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQEuzdkJLJPKue_V',
			videoPath: '',
			isVideo: false,
			isLink: true,
			linkData: {
				websiteName: 'venturebeat.com',
				title: 'Cisco channels Snapchat for video app in bid to ‘compress time’',
				desc: 'Cisco launched an asynchronous video platform called Vidcast to combat Zoom burnout, putting it in competition with Loom, Asana, and more.',
				url: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fventurebeat.com%2F2021%2F08%2F03%2Fcisco-channels-snapchat-for-video-app-in-bid-to-compress-time%2F%3Ffbclid%3DIwAR15HPy1KlClQh5Uc_kC-5B3Lm1xe9jPfAtntWFkLwA18rgKdzOxA17PaXo&h=AT2-RmpIh43tuuCHpQTCMwxfTE5dbdRg5tsBcn4GwNT-vUZunm2Z7Gzc5tdJmNq6ENv1qMhvWQF5ncmPw3T4Khzm1vTuOgAOynuCppwRd5EaVCE2VR8UN94Ah8OuqHNovqjK&__tn__=H-R&c[0]=AT2byxx-F0lpG6RGiPj9TQnG_EeDHrSUa2BqdxDJ5JmhgO3iYMk5Qjq3zOxWWuXTRUDSGZFhIeEWNxy6AkWoU-cL943ARuqO-IY1Bh7K3R6gibxWGZh6d5tXcgL6J6_tJ0H8Fp5tyaBNChRWvnA3zICILxS8MBf8oNZOnWbgZ_yTlQwcu6fwdFsvZ9M6sfnrKiuLkN94102SkQ',
			},
			likes: 23,
			comments: 3,
			shares: 3,
			userData: {
				name: 'VentureBeat',
				imgPath:
					'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/66448304_10156858399889079_2372655773873340416_n.png?_nc_cat=107&ccb=1-4&_nc_sid=1eb0c7&_nc_ohc=DC6hktOz5XkAX8YOSUG&_nc_ht=scontent.fhyd13-1.fna&oh=feb9584cb571a61fb3ae156496ffbdeb&oe=61380E6F',
			},
			postedOn: '05-08-2021 03:50 PM',
			isLiked: false,
			commentsList: [],
		},
	]);
	// HTML
	return (
		<div className='col-6 mb-4'>
			{posts.map((item) => (
				<Post postData={item} />
			))}
		</div>
	);
}

export default Content;
