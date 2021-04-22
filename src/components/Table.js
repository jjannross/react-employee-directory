import React from 'react';
function Table (props) {
    return (
        <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First</th>
            <th scope="col">Last <i className="bi bi-funnel" onClick={props.handleSort}></i></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
            {props.people.length>0 ? props.people.map((person, index) => {
                return (
                    <tr key={index}>
                    <th scope="row"> <img src={person.picture.thumbnail} alt="avatar" /> </th>
                    <td>{person.name.first}</td>
                    <td>{person.name.last}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                  </tr>
                )
            }) :    <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>}
        
          
        </tbody>
      </table>
    )
}

export default Table;