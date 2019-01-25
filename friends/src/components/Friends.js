import React from "react";
import DeleteFriend from "./DeleteFriend";
import EditFriend from "./EditFriend";

const Friends = props => {
  return (
    <div className="friends-section">
      {props.friends.map(friend => {
        return (
          <div className="friend" key={friend.id}>
            <p className="name">Name: {friend.name}</p>
            <p className="age">Age: {friend.age}</p>
            <p className="email">Email: {friend.email}</p>
            <div className="friend-buttons">
              <EditFriend
                editFriend={props.editFriend}
                friend={friend}
                isEditing={props.isEditing}
                populateForm={props.populateForm}
              />
              <DeleteFriend deleteFriend={props.deleteFriend} friend={friend} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
