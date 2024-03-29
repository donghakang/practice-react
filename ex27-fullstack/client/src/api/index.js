import axios from "axios";

const url = "http://localhost:5000/posts"; // backend route

export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
