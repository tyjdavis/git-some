import React, { Component } from 'react';
import User from './User';
import axios from 'axios';
import './App.css';



class App extends Component {

  constructor () {
      super()
      this.focus = this.focus.bind(this);
      this.class = this.class.bind(this);
      this.state = {
        user: {},

      }
    }

    focus(){
      axios.get('https://api.github.com/users/' + (this.textInput.value))
      .then(response => {
        this.setState({ user: response.data })
      })
    }

    class(name){
    axios.get('https://api.github.com/users/' + (name))
    .then(response => {
      this.setState({ user: response.data })
    })
  }

    componentDidMount() {
      axios.get('https://api.github.com/users/tyjdavis')
      .then(response => {
        this.setState({ user: response.data })
      })
    }


  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Search" ref={(input) => { this.textInput = input; }} />
        <input className="waves-effect waves-light btn" type="button" value="Search" onClick={this.focus}/>

        <h1>GitHub info displayed using React.js!</h1>
        <User data={this.state.user}/>

        <section>
          <p>The Iron Yard - Orlando Classmates</p>
          <input className="waves-effect waves-light btn" type="button" value="Chrislebbano" onClick={this.class.bind(this, 'Chrislebbano')}/>
          <input className="waves-effect waves-light btn" type="button" value="Conshus" onClick={this.class.bind(this, 'Conshus')}/>
          <input className="waves-effect waves-light btn" type="button" value="Ddsheard" onClick={this.class.bind(this, 'Ddsheard')}/>
          <input className="waves-effect waves-light btn" type="button" value="Filusmarvin" onClick={this.class.bind(this, 'Filusmarvin')}/>
          <input className="waves-effect waves-light btn" type="button" value="JCR08" onClick={this.class.bind(this, 'JCR08')}/>
          <input className="waves-effect waves-light btn" type="button" value="Ochanya" onClick={this.class.bind(this, 'Ochanya')}/>
          <input className="waves-effect waves-light btn" type="button" value="WJWJR" onClick={this.class.bind(this, 'WJWJR')}/>
        </section>
      </div>
    );
  }
}

export default App;
