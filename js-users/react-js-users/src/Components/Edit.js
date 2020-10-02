import React, { useState, useEffect, useContext } from "react";
import "../Components/Edit.css";
import TextField from "@material-ui/core/TextField";
import { editUser } from "../Api/ApiCalls";
import Button from "@material-ui/core/Button";
import { useParams } from 'react-router-dom'
import { ProjectContext } from "../Context/ProjectContext"

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const { searchUser } = useContext(ProjectContext);

  useEffect(() => {
    let user = searchUser(id);
    setUser(user);
    setFirstName(user.first_name)
    setLastName(user.last_name)
    console.log(id);
    console.log(user);
  }, []);

  const handleEdit = () => {
    user.first_name = firstName
    user.last_name = lastName
    console.log(user)
    editUser(user)

  }

  if (!user) {
    return <div className="loading">loading....</div>;
  }

  return (
    <div className="edit">
      <div className="edit-form">
        <img src={`https://avatars.dicebear.com/api/human/${user.id}.svg`} />
        <TextField
          error={error}
          onChange={(e) => setFirstName(e.target.value)}
          id="standard-basic"
          label="First name"
          defaultValue={user.first_name}
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          error={error}
          id="standard-basic"
          label="Last name"
          defaultValue={user.last_name}
        />
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default Edit;
