import React, { useContext, useState, useEffect } from "react";
import "../Components/List.css";
import { ProjectContext } from "../Context/ProjectContext";
import User from "../Components/User";

function List() {

  const { currentUsers } = useContext(ProjectContext);

  return (
    <div className="list">
      {currentUsers?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default List;
