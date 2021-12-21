import React from 'react'
import '../App.css'

export const DetailBar = (props) => {
    const columns = ['name', 'addr:street', 'cuisine', 'opening_hours', 'smoking', 'amenity']
    const labels = ['Name', 'Address', 'Cuisine', 'Opening hours', 'Smoking', 'Type']
    if (typeof props.object !== 'undefined' && props.object.name != 'name') {


        return (
            <div style={{marginTop:'150px'}}>
                {columns.map((c, idx) => {
                    return(
                    <div style={{marginLeft:'60px'}} key={idx}>
                        <label>{labels[idx]}</label>
                        <br/>
                        <input className={props.object[c] == '' ? 'unknown' : 'known'}
                         value={props.object[c] == '' ? 'Unknown' : props.object[c]} readOnly={true}>
                        
                        </input>
                        <hr/>

                    </div>)
                })}
            </div>
        )
    } else return(
        <div></div>)
}


