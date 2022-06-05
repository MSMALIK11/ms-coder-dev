import React, { useState } from "react";

import "./styles/crud.scss";

import { createPost } from "../services/api";

import { useNavigate } from "react-router-dom";

const Add = () => {
  const [Post, setPost] = useState({
    title: "",
    category: "",
    description: "",
  });

  // const history=useHistory();

  let name, value;
  const handleInput = (e) => {
    e.preventDefault();

    name = e.target.name;
    value = e.target.value;
    setPost({ ...Post, [name]: value });
  };
  let navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await createPost(Post);

      navigate("/");
    } catch (error) {
      console.log("error while posting data to api ", error);
    }
  };

  return (
    <div className="pt-5 add-form">
      <div className="form-wraper mt-5">
        <form action="">
          <h1 className="text-center">Add post </h1>
          <div className="input-wraper">
            <input
              type="text"
              name="title"
              value={Post.title}
              placeholder="Enter Post Title here...."
              onChange={handleInput}
            />

            <div className="textarea-wraper">
              <textarea
                name="description"
                value={Post.description}
                placeholder="Write description here.."
                onChange={handleInput}
              />
              <p>
                {" "}
                <span>{Post.description.split(" ").length - 1}</span>/2000
              </p>
            </div>
            <div className="input-file">
              <div className="input-box">
                <label htmlFor="postimg">
                  <i className="bi bi-camera" />{" "}
                </label>
                <input
                  type="file"
                  className="hide"
                  id="postimg"
                  style={{ display: "none", visibility: "none" }}
                />
              </div>
            </div>

            <div className="category-wraper">
              <select
                className="form-select"
                name="category"
                value={Post.category}
                aria-label="Default select example"
                onChange={handleInput}
              >
                <option defaultValue="web design">choose category</option>
                <option value="web-design">web-design</option>
                <option value="life-style">life-styles</option>
                <option value="technology">technology</option>
              </select>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            {" "}
            <span>
              <i className="bi bi-plus-circle-fill "></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
