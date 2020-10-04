import axios from "axios";

const API_URL = "http://js-assessment-backend.herokuapp.com/users.json";

export async function getUsers() {
  let response = await axios.get(API_URL);
  return response.data;
}

export async function changeStatus(user) {
  axios.put(user.url, user);
}

export async function createNewUser(user) {
  try {
    let res = await axios.post(API_URL, user)
    return res;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    }
    return false;
  }
}

export async function editUser(user) {
  let response = await axios.put(user.url, user)
  return response.data;
}
