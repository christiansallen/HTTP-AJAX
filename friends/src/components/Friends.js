import React from "react";

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return <li>{friend.name}</li>;
      })}
    </div>
  );
};

export default Friends;
