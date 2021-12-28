import React from 'react'
import { DetailBar } from './DetailBar';

const SideBar = (props) => {
    return(
        <div >
            <DetailBar object={props.object}/>
        </div>
    )
}

export default SideBar;