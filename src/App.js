import React, { Component } from 'react';
import User from './User';
import axios from 'axios';
import './App.css';



class App extends Component {

  constructor () {
      super()
      this.focus = this.focus.bind(this);
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

    componentDidMount() {
      axios.get('https://api.github.com/users/tyjdavis')
      .then(response => {
        this.setState({ user: response.data })
      })
    }


  render() {
    return (
      <div className="App">
        <input type="text" ref={(input) => { this.textInput = input; }} />
        <input className="waves-effect waves-light btn" type="button" value="Search" onClick={this.focus}/>
        <h1>GitHub info displayed using React.js!</h1>
        <User data={this.state.user}/>
        <section>
          <p>The Iron Yard - Orlando</p>
          <input className="waves-effect waves-light btn" type="button" value="Chrislebbano" ref={(value) => { this.textInput = value; }}  onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="Conshus" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="Ddsheard" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="Filusmarvin" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="JCR08" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="Ochanya" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
          <input className="waves-effect waves-light btn" type="button" value="WJWJR" ref={(value) => { this.textInput = value; }} onClick={this.focus}/>
        </section>
      </div>
    );
  }
}

export default App;
