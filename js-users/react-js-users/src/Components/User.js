import React from "react";
import "../Components/User.css";
import BlockIcon from "@material-ui/icons/Block";
import { Avatar } from "@material-ui/core";
import { setStatus } from "../Api/ApiCalls";

function User({ user, status }) {

  const handleStatis = () => {
    setStatus(user);
  }

  return (
    <div className={`${status} user-body`}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${user.id}.svg`} />
      <div className="user-info">
        {`${user.first_name} ${user.last_name}`}
        <div className="user-created-at">
          {`Created at ${new Date(user.created_at).toDateString()}`}
        </div>
      </div>
      <BlockIcon onClick={handleStatis} className={status} />
    </div>
  );
}

export default User;
