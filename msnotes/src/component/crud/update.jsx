import React, { useState, useEffect } from "react";
import { getSinglePost, updatePost } from "../services/api";

import "./styles/crud.scss";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [Post, setPost] = useState({
    title: "",
    category: "",
    description: "",
  });
  const { id } = useParams();

  let navigate = useNavigate();

  let name, value;
  const handleInput = (e) => {
    e.preventDefault();

    name = e.target.name;
    value = e.target.value;
    setPost({ ...Post, [name]: value });
  };

  useEffect(() => {
    const fetchdata = async () => {
      let res = await getSinglePost(id);
      setPost(res.post);
    };

    fetchdata();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updatePost(id, Post);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5 add-form">
      <div className="form-wraper mt-5">
        <form action="" method="POST">
          <h1 className="text-center">update post </h1>
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
                <option selected defaultValue="web-design">
                  choose category
                </option>
                <option value="web-design">web-design</option>
                <option value="life-style">life-styles</option>
                <option value="technology">technology</option>
              </select>
            </div>
          </div>

          <button onClick={handleUpdate}>
            {" "}
            <span>
              {" "}
              <i className="bi bi-upload "></i>{" "}
            </span>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
