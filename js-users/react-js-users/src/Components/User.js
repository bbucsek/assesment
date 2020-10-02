import React, { useState } from "react";
import "../Components/User.css";
import BlockIcon from "@material-ui/icons/Block";
import { Avatar } from "@material-ui/core";
import { changeStatus } from "../Api/ApiCalls";
import { useHistory } from "react-router-dom";

function User({ user }) {
  const [status, setStatus] = useState(user.status);
  const history = useHistory();

  const handleStatus = () => {
    let newStatus = user.status === "active" ? "locked" : "active";
    user.status = newStatus;
    setStatus(newStatus);
    changeStatus(user);
  };

  const editUser = () => {
    history.push(`/edit/${user.id}`);
  };

  return (
    <div className={`${status} user-body`}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${user.id}.svg`} />
      <div onClick={editUser} className={`user-info ${status}`}>
        {`${user.first_name} ${user.last_name}`}
        <div  className="user-created-at">
          {`Created at ${new Date(user.created_at).toDateString()}`}
        </div>
      </div>
      <BlockIcon onClick={handleStatus} className={status} />
    </div>
  );
}

export default User;
