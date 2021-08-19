import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'react-cookies'
import { useHistory } from 'react-router-dom';

function Nav() {
	//variables
		var router = useHistory()
		var wishlist = useSelector(appData => appData.wishList)
		var isUserLoggedIn = false;
		var loggedinUserid = cookie.load("userid")
		if( loggedinUserid != null) {
			isUserLoggedIn = true;
		}

		function handleLogout(){
			cookie.remove("userid")
			cookie.remove("token")
			router.push("/login")
		}

	//HTML
	return (
		<div className='row'>
			<div className='col-12 flex'>
				<Link to='/'>Home</Link> &nbsp; &nbsp;
				<Link to='/shop'>Shop</Link> &nbsp; &nbsp;
				<Link to='/facebook'>Facebook</Link>&nbsp; &nbsp;
				<Link to='/swiggy'>Swiggy</Link> &nbsp; &nbsp;
				<Link to="/wishlist">
					
					<span className="text-danger"><FontAwesomeIcon icon={faHeart} /> </span>
					{
						wishlist.length
					}

				</Link> &nbsp; &nbsp;
				{
					isUserLoggedIn == false && (
						<Link to="/login">Login</Link>
					)
				}
				{
					isUserLoggedIn == true && (
						<button className="btn btn-link" onClick={ e => handleLogout() } >Logout</button>
					)
				}
				
			</div>
		</div>
	);
}

export default Nav;
