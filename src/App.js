import React, { Component } from 'react';
import User from './User';
import axios from 'axios';
import './App.css';



class App extends Component {

  constructor () {
      super()
      this.state = {
        user: {},
      }
    }

    componentDidMount() {
      //runs when the component is rendered for the 1st time
      //make ajax calls here and set state wth them
      axios.get('https://api.github.com/users/tyjdavis')
      .then(response => {
        this.setState({ user: response.data })
      })
    }


  render() {
    return (
      <div className="App">
        <input placeholder="Search"></input>
        <h1>GitHub info displayed using React.js!</h1>
        <User data={this.state.user}/>
      </div>
    );
  }
}

export default App;
