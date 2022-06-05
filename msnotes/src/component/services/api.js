import axios from "axios";

const URL = "http://localhost:8080";

export const getAllPost = async (param) => {
  console.log("api call", param);

  try {
    let res = await axios.get(`${URL}/api/v1/post${param}`);

    return res.data;
  } catch (error) {
    console.log("error while getAllPost API calling ", error);
  }
};

export const createPost = async (Post) => {
  try {
    await axios.post(`${URL}/api/v1/post/new`, Post);
    console.log("data save successfully ", Post);
  } catch (error) {}
};

export const getSinglePost = async (id) => {
  try {
    const res = await axios.get(`${URL}/api/v1/post/${id}`);
    return res.data;
  } catch (error) {
    console.log("error while calling single post ", error);
  }
};

export const updatePost = async (id, Post) => {
  try {
    await axios.post(`${URL}/api/v1/post/update/${id}`, Post);
  } catch (error) {
    console.log("error while calling update api", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/api/v1/post/${id}`);
  } catch (error) {}
};

// signup

export const signupUser = async (data) => {
  try {
    await axios.post(`${URL}/api/v1/signup`, data);
  } catch (error) {}
};
