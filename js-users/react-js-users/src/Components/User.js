import React from "react";
import "../Components/User.css";
import BlockIcon from '@material-ui/icons/Block';
import {Avatar} from "@material-ui/core";

function User({ user }) {
  return (
    <div className="user-body">
      <Avatar src={`https://avatars.dicebear.com/api/human/${user.id}.svg`} />
      <div className="user-name">
        {`First name: ${user.first_name} Last name: ${user.last_name}`}
        <span className="user-created-at">{new Date(user.created_at).toDateString()}</span>
      </div>
      <BlockIcon />
    </div>
  );
}

export default User;
