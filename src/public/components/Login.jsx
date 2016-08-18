import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class Login extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNewUserChange = this.handleNewUserChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.state =  {
     newUsername: '',
     name: '',
     username: ''
     }

  }

  render(){


    var style = {
      display: (this.props.showLogin.show)? "block" : "none"
    }
    return (
      <div>
        <p><button onClick={ ()=> this.props.setLoginScreen(true)}>Login/Sign-Up</button></p>

        <div id="login" style={style}>


          <div className="modal-content">
            <div className="modal-header">
              <h2>Login/Sign-Up</h2>
            </div>
            <div className="modal-body">
              <p>Please enter your username if you have one: <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              ></input></p>
              <p>If you don't have a username, please register here:</p>
              <p>Name: <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              ></input></p>
              <p>Username: <input
                type="text"
                value={this.state.newUsername}
                onChange={this.handleNewUserChange}

              ></input></p>

            </div>
            <div className="modal-footer">
              <button onClick={()=>{
                  this.props.setLoginScreen(false)
                  this.props.handleGetUser(this.state.username)
                  this.props.handleCreateUser(this.state.newUsername, this.state.name)
                }}>Submit</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleNewUserChange(event) {
    this.setState({newUsername: event.target.value});
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

}
