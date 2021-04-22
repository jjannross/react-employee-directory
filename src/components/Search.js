import React from 'react';
function Search (props) {
    return (
        <nav style={searchStyle} className="navbar navbar-expand-lg navbar-light bg-light ">Employee Directory
       
        <input type="text" className="form-control" placeholder="search here" aria-label="Sizing example input" name= "input" value={props.input} onChange={props.handleInputChange}
        aria-describedby="inputGroup-sizing-default" />

</nav>
    );
}

const searchStyle = {
    backgroundColor: 'gray',
    fontSize: '50px'
};

export default Search; 


