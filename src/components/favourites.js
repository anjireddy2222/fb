import Nav from '../Nav';
import { useDispatch, useSelector } from 'react-redux';

function favourites(){
    // variables
    var favourites = useSelector(appData => appData.favourites)
    // HTML
    return(
        <div className='container'>
			<Nav />
            <div className="row">
                <div className="col-12"><h4>favourite Items</h4></div>
                {
                    favourites.map( (item, index) => (
                        <div className="col-12 pb-2 mb-2 border-bottom">
                            { index }.&nbsp;&nbsp; {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default favourites;
