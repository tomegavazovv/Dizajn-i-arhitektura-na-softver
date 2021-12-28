import React from 'react'
import '../App.css'

export const DetailBar = (props) => {
    const columns = ['name', 'addr:street', 'cuisine', 'opening_hours', 'smoking', 'amenity']
    const labels = ['Name', 'Address', 'Cuisine', 'Opening hours', 'Smoking', 'Type']
    if (typeof props.object !== 'undefined' && props.object.name != 'name') {


        return (
            <div >
                {columns.map((c, idx) => {
                    return(
                    <div style={{backgroundColor:'white', marginBottom:'10px', borderRadius:'10px', height:'50px', width:'90%', marginLeft:'12px'}} key={idx}>
                        <label style={{fontWeight:'500',marginLeft:'32px' }}>{labels[idx]}</label>
                        <br/>
                        <input className={props.object[c] == '' ? 'unknown' : 'known'}
                         value={props.object[c] == '' ? 'Unknown' : props.object[c]} readOnly={true}
                         style={{borderRadius:'20px', padding:'3px 5px', marginLeft:'30px', border:'0.2px solid #929292'}}>
                        
                        </input>
                        <br/><br/>

                    </div>)
                    
                })}
            </div>
        )
    } else return(
        <div></div>)
}


