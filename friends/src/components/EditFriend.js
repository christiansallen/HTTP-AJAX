import React, { Component } from "react";

class EditFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          className="friend-button"
          onClick={e => this.props.populateForm(e, this.props.friend.id)}
        >
          Edit Friend
        </button>
      </div>
    );
  }
}

export default EditFriend;
