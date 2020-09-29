import axios from 'axios';

const API_URL = "http://js-assessment-backend.herokuapp.com/users.json"

export async function getUsers() {
    let response = await axios.get(API_URL);
    return response.data;
  }