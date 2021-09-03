import Nav from '../Nav';
import { useDispatch, useSelector } from 'react-redux';

function Wishlist(){
    // variables
var wishlist = useSelector(appData => appData.wishList)
    // HTML
    return(
        <div className='container'>
			<Nav />
            <div className="row">
                <div className="col-12"><h4>Wishlist Items</h4></div>
                {
                    wishlist.map( (item, index) => (
                        <div className="col-12 pb-2 mb-2 border-bottom">
                            { index }.&nbsp;&nbsp; {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist;
