import React from "react";

function AddFriend(props) {
  const conditional = e => {
    e.preventDefault();
    if (props.isEditing) {
      props.editFriend(e);
    } else {
      props.handleSubmit(e);
    }
  };

  return (
    <div className="add-friend">
      <h1> {props.isEditing ? "Edit" : "Add"} Friend: </h1>
      <form onSubmit={conditional} className="add-friend-form">
        <input
          type="text"
          name="name"
          value={props.newFriend.name}
          onChange={props.handleChange}
          placeholder="name"
          className="friend-input"
        />
        <input
          type="number"
          name="age"
          value={props.newFriend.age}
          onChange={props.handleChange}
          placeholder="age"
          className="friend-input"
        />
        <input
          type="text"
          name="email"
          value={props.newFriend.email}
          onChange={props.handleChange}
          placeholder="email"
          className="friend-input"
        />
        <button className="add-button" type="Submit">
          {props.isEditing ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddFriend;
