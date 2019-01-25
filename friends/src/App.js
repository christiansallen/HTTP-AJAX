import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: null,
        email: ""
      },
      isEditing: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const friend = {
      name: this.state.newFriend.name,
      age: this.state.newFriend.age,
      email: this.state.newFriend.email
    };

    axios
      .post("http://localhost:5000/friends", friend)
      .then(res =>
        this.setState({
          friends: res.data,
          newFriend: {
            name: "",
            age: null,
            email: ""
          },
          isEditing: false
        })
      )
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  editFriend = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/friends/${this.state.newFriend.id}`,
        this.state.newFriend
      )
      .then(res => this.setState({ friends: res.data, isEditing: false }))
      .catch(err => console.log(err));
  };

  populateForm = (e, id) => {
    let selected = this.state.friends.find(friend => friend.id === id);
    this.setState({ newFriend: selected, isEditing: true });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">Friends</h1>
        <AddFriend
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newFriend={this.state.newFriend}
          isEditing={this.state.isEditing}
          editFriend={this.editFriend}
        />
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          editFriend={this.editFriend}
          populateForm={this.populateForm}
        />
      </div>
    );
  }
}

export default App;
