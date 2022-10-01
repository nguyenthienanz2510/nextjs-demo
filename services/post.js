import axios from "axios";

export const BASE_URL = 'http://localhost:8080'

export const postService = {
    getPosts: () => {
      return axios({
        method: "GET",
        url: `${BASE_URL}/feed/posts`
      });
    },
    getPostDetail: (postId) => {
      return axios({
        method: "GET",
        url: `${BASE_URL}/feed/post/${postId}`
      });
    }
  };