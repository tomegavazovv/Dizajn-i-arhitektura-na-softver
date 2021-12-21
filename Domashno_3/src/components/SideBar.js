import React from 'react'
import { DetailBar } from './DetailBar';

const SideBar = (props) => {
    return(
        <div style={{position: 'absolute' }}>
            <DetailBar object={props.object}/>
        </div>
    )
}

export default SideBar;