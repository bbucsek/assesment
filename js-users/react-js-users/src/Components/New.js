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
  const [errorText, setErrorText] = useState("");
  const [errors, setErrors] = useState({
      first_name: "",
      last_name: "",
      status: "",
  });
  const [status, setStatus] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const history = useHistory();

  const [avatar, setAvatar] = useState();

    useEffect(() => {
        setAvatar(Math.floor(Math.random() * 5000));
    }, []);

  const handleCreate = async () => {
    let newUser = {
      first_name: firstName,
      last_name: lastName,
      status: status,
    };
    let res = await createNewUser(newUser)
    if (res.status === 201) history.push("/")
    if (!res) {
      setErrorText("Error! Please make sure you are using a reasonable first/last name")
    }
    setErrors({...errors, 
      first_name: res.first_name,
      last_name: res.last_name,
      status: res.status,
    })
  };

  return (
    <div className="new">
      <div className="new-form">
        <h2>Create new user</h2>
        <img src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} />
        {errorText && <div className="new-errortext">{errorText}</div>}
        <TextField
          error={error}
          onChange={(e) => setFirstName(e.target.value)}
          id="standard-basic"
          label="First name"
          helperText={errors.first_name}
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          error={error}
          id="standard-basic"
          label="Last name"
          helperText={errors.last_name}
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
        {errors.status && <div className="new-field-errortext">{errors.status}</div>}
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </div>
    </div>
  );
}

export default New;
