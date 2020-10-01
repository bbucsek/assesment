import axios from "axios";

const API_URL = "http://js-assessment-backend.herokuapp.com/users";
const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

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
