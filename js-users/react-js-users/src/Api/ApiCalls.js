import axios from 'axios';

export async function getUsers() {
    let response = await axios.get(" http://js-assessment-backend.herokuapp.com/users.json");
    return response.data;
  }