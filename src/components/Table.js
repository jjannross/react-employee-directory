import React from 'react';
function Table (props) {
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
            {props.people.length>0 ? props.people.map(person => {
                return (
                    <tr>
                    <th scope="row"> <img src={person.picture.thumbnail}/> </th>
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