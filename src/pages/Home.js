import React, { Component } from 'react';
import api from '../utils/API';
import Table from '../components/Table'
import Search from '../components/Search'

class Home extends Component {
    state = {
        people: [], 
        original: [],
        input: ""
    }
    componentDidMount(){
        api.getEmployee().then(response => {
            this.setState({
                people: response.data.results,
                original: response.data.results
            })
        })
    }
    handleSort = () => {
        if (this.state.sorted === 'ascending') {
          const sortedEmployees = this.state.employees.sort((a, b) => {
            return a.name.last.localeCompare(b.name.last);
          });
    
          this.setState({ employees: sortedEmployees, sorted: 'descending' });
        } else {
          const sortedEmployees = this.state.employees.sort((a, b) => {
            return b.name.last.localeCompare(a.name.last);
          });
    
          this.setState({ employees: sortedEmployees, sorted: 'ascending' });
        }
      };
    handleInputChange=(event) => {
        const {name, value} = event.target
        this.setState({[name]: value}) 
        const newPeople = this.state.original.filter(person => {
            return person.name.first.toLowerCase().includes(value.toLowerCase())
        }) 
        this.setState({people: newPeople}) 
    }
    render(){
        return(
            <>
                <Search input={this.state.input} handleInputChange={this.handleInputChange}/>
                <Table people = {this.state.people} />
            </>
        )
    }
} 

export default Home;