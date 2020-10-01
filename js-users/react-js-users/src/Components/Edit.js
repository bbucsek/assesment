import React, { useEffect, useContext, useState } from "react";
import "../Components/Edit.css";
import { useParams } from "react-router-dom";
import { editUser } from "../Api/ApiCalls";
import { ProjectContext } from "../Context/ProjectContext";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState();

  const { searchUser } = useContext(ProjectContext);

  useEffect(() => {
    let user = searchUser(id);
    setUser(user);
    console.log(id);
    console.log(user);
  }, []);

  if (!user) {
    return <div className="loading">loading....</div>;
  }

  return (
    <div className="edit">
      {user?.first_name}
      {user?.last_name}
    </div>
  );
}

export default Edit;
