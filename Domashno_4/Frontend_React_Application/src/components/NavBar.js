import React from 'react';

const NavBar = (props) => {
    return <div className='topnav'>
        <a onClick={props.clickHandler} className={props.forMap ? '' : 'active'}>Table View</a>
        <a onClick={props.clickHandler} className={props.forMap ? 'active' : ''}>Map View</a>
        <a style={{ float: 'left', marginLeft: 0 }} onClick={() => window.location.reload()}>Reset</a>
    </div>;
};

export default NavBar;
