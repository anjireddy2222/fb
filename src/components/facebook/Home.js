import Content from './Content';
import Left from './Left';
import Nav from './Nav';
import Right from './Right';

function Home() {
	// variables

	//HTML
	return (
		<div className='container-fluid'>
			<Nav />
			<div className='row'>
				<Left />
				<Content />
				<Right />
			</div>
		</div>
	);
}

export default Home;
