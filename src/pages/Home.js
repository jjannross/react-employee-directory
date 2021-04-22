import React, { Component } from 'react';
import API from '../utils/API';
import Table from '../components/Table'
import Search from '../components/Search'

class Home extends Component {
    state = {
        people: [], 
        original: [],
        input: "",
        sortOrder: 'asc'
    }
    componentDidMount(){
        API.getEmployee().then(response => {
            this.setState({
                people: response.data.results,
                original: response.data.results
            })
        })
    }
    handleSort = () => {
        console.log(this.state)
        if (this.state.sortOrder === 'asc') {
          const sortedEmployees = this.state.people.sort((a, b) => {
            return a.name.last.localeCompare(b.name.last);
          });
    
          this.setState({ people: sortedEmployees, sortOrder: 'desc' });
        } else {
          const sortedEmployees = this.state.people.sort((a, b) => {
            return b.name.last.localeCompare(a.name.last);
          });
    
          this.setState({ people: sortedEmployees, sortOrder: 'asc' });
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
                <Table people={this.state.people} handleSort={this.handleSort} />
            </>
        )
    }
} 

export default Home;