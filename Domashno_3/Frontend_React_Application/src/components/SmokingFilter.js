import React from 'react';

const SmokingFilter = (props) => {
    return (
        <div>
            <select className='smokingFilter filter' onChange={props.changeHandler} id="smoking" name="smoking">
                <option value='smoking'>--Smoking--</option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
        </div>
    );
};

export default SmokingFilter;
