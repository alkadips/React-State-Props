import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  // Setting Initial State
  state = {
    users: [
      {name:"Alka", age:20},
      {name:"Deepak", age:30},
      {name:"Advika", age:40},
      {name:"Shivansh", age:30},
    ],
    title:"Users List"
  }

  // Handle to modify state
  makeMeYounger = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      tempUser.age -=10;
      return tempUser;
    });
    this.setState({
      newState
    });
  }

  render(){
    return (<div>
      <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
      <br/>
      <h1>{this.state.title}</h1>
      {
        this.state.users.map((user)=>{
          return <User className="User-list" age={user.age}>{user.name}</User>
        })
      }
      </div>)
  }
}

export default Users;