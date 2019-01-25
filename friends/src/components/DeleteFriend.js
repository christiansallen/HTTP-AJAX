import React, { Component } from "react";

class DeleteFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          className="friend-button"
          onClick={e => this.props.deleteFriend(e, this.props.friend.id)}
        >
          Delete Friend
        </button>
      </div>
    );
  }
}

export default DeleteFriend;
