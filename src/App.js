// create your App component here
import React, {Component} from 'react';
import './App.css';


export default class App extends Component {
state = {
    peopleInSpace: []
}

render() {
    return (
        <ul>
            {this.state.peopleInSpace.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
    )
}

componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            peopleInSpace: data.people
        })
    })
}


}