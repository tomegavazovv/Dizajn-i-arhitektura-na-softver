import React from 'react';

const TypeFilter = (props) => {
    return (
        <div>
            <select className='typeFilter filter' onChange={props.changeHandler} id="types" name="types">
                <option value='type'>--Type--</option>
                <option value='restaurant'>Restaurant</option>
                <option value='pub'>Pub</option>
                <option value='fast_food'>Fast Food</option>
                <option value='bar'>Bar</option>
                <option value='cafe'>Cafe</option>
                <option value='nightclub'>Night Club</option>
            </select>
        </div>
    );
};

export default TypeFilter;
