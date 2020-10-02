import axios from "axios";

const API_URL = "http://js-assessment-backend.herokuapp.com/users";

export async function getUsers() {
  let response = await axios.get(API_URL + ".json");
  return response.data;
}

export async function changeStatus(user) {
  axios.put(user.url, user);
}

export async function createNewUser(user) {
  let response = axios.post(API_URL + ".json", user)
  return response;
}

export async function editUser(user) {
  let response = await axios.put(user.url, user)
  if (response) {
    console.log("siker")
    return true
  }
  console.log("nem siker")
  return false
}
