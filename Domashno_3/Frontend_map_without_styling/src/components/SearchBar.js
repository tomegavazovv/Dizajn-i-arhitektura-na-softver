import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const SearchBar = (props) => {
    return(
        <input onEnter={props.callback('The Gallery')} value='The Gallery' style={{padding:'15px', marginTop:'30px', marginLeft:'50px'}} placeholder='name of object'></input>
    )
}
export default SearchBar 
