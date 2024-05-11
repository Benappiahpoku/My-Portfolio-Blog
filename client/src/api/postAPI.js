import axios from "axios";

export function getPosts() {
  return axios.get("/posts");
}
export function getPost(id) {
  return axios.get(`/posts/${id}`);
}

export function createPost(post, file) {
  const formData = new FormData();
  Object.keys(post).forEach((key) => formData.append(key, post[key]));
  formData.append("image", file);

  return axios.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function updatePost(id, post) {
  return axios.put(`/posts/${id}`, post);
}

export function deletePost(id) {
  return axios.delete(`/posts/${id}`);
}
