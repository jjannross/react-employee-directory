import React from 'react';
function Search (props) {
    return (
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
        <input type="text" className="form-control" aria-label="Sizing example input"  name= "input" value={props.input} onChange={props.handleInputChange}
        aria-describedby="inputGroup-sizing-default" />
      </div> 
    )
}

export default Search; 