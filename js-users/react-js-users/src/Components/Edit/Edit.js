import React, { useState, useEffect, useContext } from "react";
import "../Edit/Edit.css";
import TextField from "@material-ui/core/TextField";
import { editUser } from "../../Api/ApiCalls";
import Button from "@material-ui/core/Button";
import { useParams, useHistory } from 'react-router-dom'
import { ProjectContext } from "../../Context/ProjectContext"
import CircularProgress from '@material-ui/core/CircularProgress';


function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [errorText, setErrorText] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const history = useHistory();
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);


  const { searchUser } = useContext(ProjectContext);

  useEffect(() => {
    let user = searchUser(id);
    if (user === undefined) {
      return
    }
    setUser(user);
    setFirstName(user.first_name)
    setLastName(user.last_name)
  }, [id, searchUser]);

  const handleEdit = async () => {
    let editedUser = {
      first_name: firstName,
      last_name: lastName,
      url: user.url,
    }
    await editUser(editedUser).then(() => {
      user.first_name = firstName
      user.last_name = lastName
      history.push("/")
    }).catch((e) => {
      setErrorText("Please check the underlined fields. Make sure you are using a reasonable first/last name.")
      setFirstNameError(editedUser.first_name !== user.first_name ? true : false)
      setLastNameError(editedUser.last_name !== user.last_name ? true : false)
    })  
  }

  if (!user) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="edit">
      <div className="edit-form">
        <h2>Edit User</h2>
        <img src={`https://avatars.dicebear.com/api/human/${user.id}.svg`} />
        {errorText && <div className="edit-errortext">{errorText}</div>}
        <TextField
          error={firstNameError}
          onChange={(e) => setFirstName(e.target.value)}
          id="standard-basic"
          label="First name"
          defaultValue={user.first_name}
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameError}
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
