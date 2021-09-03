import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import cookie from 'react-cookies';

function App() {
	// varibales
	var [errorMsg, setErrorMsg] = useState('');
	var [convos, setConvos] = useState([]);
	var [participants, setParticipants] = useState([]);
	var [profiles, setProfiles] = useState([]);

	useEffect(() => {
		async function getConvos() {
			try {
				var form = new FormData();
				form.append('userId', cookie.load('userid'));

				var headers = { Authorization: 'Bearer ' + cookie.load('token') };

				var apiResponse = await axios.post('https://www.backend.joinping.co/ping/getConvosList', form, { headers: headers });
				console.log(apiResponse);
				if (apiResponse.data.result == 'SUCCESS') {
					setErrorMsg('');
					setConvos(apiResponse.data.data.convos);
					setParticipants(apiResponse.data.data.participants);
					setProfiles(apiResponse.data.data.userProfiles);
				} else {
					setErrorMsg(apiResponse.data.message);
				}
			} catch (err) {
				setErrorMsg(err.message);
			}
		}

		getConvos();
	}, []);

	// HTML
	return (
		<div className='container'>
			<Nav />
			<div className='row'>
				<div className='col-12'>
					<h3>Home page</h3>
					<div className='mt-2 mb-2'>
						<p>Total Conversations: {convos.length} </p>
						<p>Total Participants: {participants.length}</p>
					</div>
					<div className='mt-2 mb-2'>
						{convos.map((item, position) => (
							<p className='border-bottom'>
								<h6>
									{position}. {item.title}
								</h6>
								{item.description}
							</p>
						))}
					</div>
					<div className='text-danger'>{errorMsg}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
