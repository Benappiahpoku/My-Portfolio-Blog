import axios from "axios";

export function getUserActivities() {
  return axios.get("/userActivities");
}

export function createUserActivity(userActivity) {
  return axios.post("/userActivities", userActivity);
}

export function updateUserActivity(id, userActivity) {
  return axios.put(`/userActivities/${id}`, userActivity);
}

export function deleteUserActivity(id) {
  return axios.delete(`/userActivities/${id}`);
}
