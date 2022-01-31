import React from 'react';
import { GetCities } from '../data/GetCities'


const CityFilter = (props) => {
    const [cities, setCities] = React.useState([])

    React.useEffect(() => {
        GetCities().then(res => setCities(res))
    }, [])

    return (
        <div>
            <select className='cityFilter filter' onChange={props.changeHandler} id="cities" name="cities">
            <option selected value="City">Select City</option>
                {cities.map(city => 
                    <option key={city.city} value={city.city}>{city.city}</option>)}
            </select>
        </div>);
};

export default CityFilter;
