import { Link } from 'react-router-dom';

function Nav() {
	//variables

	//HTML
	return (
		<div className='row'>
			<div className='col-12 flex'>
				<Link to='/'>Home</Link> &nbsp; &nbsp;
				<Link to='/shop'>Shop</Link> &nbsp; &nbsp;
				<Link to='/facebook'>Facebook</Link>
			</div>
		</div>
	);
}

export default Nav;
