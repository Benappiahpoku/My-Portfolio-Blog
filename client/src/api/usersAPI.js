import axios from "axios";

export function getUsers() {
  return axios.get("/users");
}

export function createUser(user) {
  return axios.post("/users", user);
}

export function updateUser(id, user) {
  return axios.put(`/users/${id}`, user);
}

export function deleteUser(id) {
  return axios.delete(`/users/${id}`);
}
