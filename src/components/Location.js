import { useState } from 'react'
import Nav from '../Nav'
import axios from  'axios'

function Location(){

    // variables
    var [latitude, setLatitude] = useState('')
    var [longitude, setLongitude] = useState('')

    const handleLocation = () =>{

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(processCoordinates)
        }

    }

    const processCoordinates = (coords) =>{
        console.log("coords", coords)
        setLatitude(coords.coords.latitude)
        setLongitude(coords.coords.longitude)
        getLocationData(coords.coords.latitude, coords.coords.longitude)
    }

    var [country, setCountry] = useState("")
    var [address, setAddress] = useState("")

    const getLocationData = async (lat, long) =>{
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat+","+long +"&key=AIzaSyDQ-0yDs9LF6PLjsg6o_-BPy8INN6YCUks"
        var response = await axios.get(url)
        console.log(response)
        if(response.data.status == "OK"){
            var results = response.data.results;
            console.log(results)
            results.map( item => {
                var types = item.types;
                types.map( type =>{
                    if( type == "country"){
                        setCountry(item.formatted_address)
                    }
                    if( type == "street_address"){
                        setAddress(item.formatted_address)
                    }
                })
            })
        }
    }

    // HTML 
    return(
        <div className="container">
            <Nav />
            <div className="row">
                <div className="col-12 mt-2">
                    <h4>Location Services</h4>
                    <button className="btn btn-primary" onClick={e => handleLocation() }>
                        Get GPS Location
                    </button>
                    <div>
                        My coordinates: {latitude},{longitude}
                    </div>
                    <div>
                        My address: {address}
                    </div>
                    <div>
                        <a href={ "https://maps.google.com?q=" + latitude + "," + longitude }>Navigate</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;