import React, {Component} from 'react';

class User extends Component {
  render(){
    const git = this.props.data;
    return(
      <div>
        <div className="row">
          <div className="col s6">
            <img src={git.avatar_url}/>
          </div>
          <div className="col s6">
            <h4><strong>{git.name}</strong></h4>
            <h5><strong>Username:</strong> {git.login}</h5>
            <p><strong>Bio:</strong> {git.bio}</p>
            <p><strong>Location:</strong> {git.location}</p>
            <p><a className="waves-effect waves-light btn-large" target="_blank" href={git.html_url}>GitHub</a></p>
            <p><a className="waves-effect waves-light btn-large" target="_blank" href={git.blog}>Blog</a></p>
            <strong>{git.hireable ? "Hireable: Yes" : "Hireable: No" }</strong>
          </div>
        </div>
      </div>
      )
    }
  }

export default User
