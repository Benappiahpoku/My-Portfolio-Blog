import axios from "axios";

export function getComments() {
  return axios.get("/comments");
}

export function createComment(comment) {
  return axios.post("/comments", comment);
}

export function updateComment(id, comment) {
  return axios.put(`/comments/${id}`, comment);
}

export function deleteComment(id) {
  return axios.delete(`/comments/${id}`);
}
