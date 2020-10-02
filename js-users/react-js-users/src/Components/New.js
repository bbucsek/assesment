import React, { useState, useEffect } from "react";
import "../Components/New.css";
import TextField from "@material-ui/core/TextField";
import { createNewUser } from "../Api/ApiCalls";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useHistory } from 'react-router-dom'

function New() {
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("active");
  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const history = useHistory();

  const [avatar, setAvatar] = useState();

    useEffect(() => {
        setAvatar(Math.floor(Math.random() * 5000));
    }, []);

  const handleCreate = () => {
    let newUser = {
      first_name: firstName,
      last_name: lastName,
      status: status,
    };
    createNewUser(newUser)  
    history.push("/edit")
  };

  return (
    <div className="new">
      <div className="new-form">
        <h2>Create new user</h2>
        <img src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} />
        <TextField
          error={error}
          onChange={(e) => setFirstName(e.target.value)}
          id="standard-basic"
          label="First name"
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          error={error}
          id="standard-basic"
          label="Last name"
          helperText={error.text}
        />
        <FormControl className="form">
          <InputLabel htmlFor="age-native-simple" disabled>
            Status
          </InputLabel>
          <Select 
          native
          onChange={e => setStatus(e.target.value)}>
            <option aria-label="None" value="" />
            <option value={"active"}>active</option>
            <option value={"locked"}>locked</option>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </div>
    </div>
  );
}

export default New;
