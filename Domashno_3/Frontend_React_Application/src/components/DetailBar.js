import React from 'react'

const DetailBar = (props) => {

    const checkExistingColumn = (col) => {
        return props.object[col] != '' && props.object[col] != undefined
    }

    if (props.object.id != undefined)
        return (
            <div>
                {props.columns.slice(0, 6).map((col, idx) => {
                    return (
                        <div className='labelContainer' key={idx}>
                            <label style={{ fontWeight: '500', marginLeft: '3.2vw' }}>{col.label}</label>
                            <input className={[checkExistingColumn(col.id) ? 'known' : 'unknown', 'Label'].join(' ')}
                                value={checkExistingColumn(col.id) ? props.object[col.id] : 'Unknown'} readOnly={true}></input>
                        </div>)})}
                {['pub', 'restaurant', 'fast_food'].includes(props.object.amenity) ?
                    <div className='labelContainer' key={7}>
                        <label style={{ fontWeight: '500', marginLeft: '3.2vw' }}>{'Cuisine'}</label>
                        <input className={[checkExistingColumn('cuisine') ? 'known' : 'unknown', 'Label'].join(' ')}
                            value={checkExistingColumn('cuisine') ? props.object['cuisine'] : 'Unknown'} readOnly={true}></input></div> : ''}
            </div>
        )
    else return (<></>)
}

export default DetailBar