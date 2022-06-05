import React from "react";

import "./styles/navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { userLogin,userSignup } from "../store/Actions/User";
import {useDispatch,useSelector} from 'react-redux';
import { useCookies } from "react-cookie";

const initialValues = {
  login: {
    view: "login",
    heading: "login here.",
    subHeading: "login to get started",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here.",
    subHeading: "share your beautiful thoughts.",
  },
};

const userInitialValies = {
  name: "",
  email: "",
  password: "",
};

const Navbar = () => {
  const [account, setAccount] = useState(initialValues.login);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

 


    const [cookies, setCookie] = useCookies(["token"]);



  const dispatch=useDispatch();
  const [show, setShow] = useState(true);

  const showPassword = () => setShow(!show);
  let navigate = useNavigate();

  let name, value;
  const handleInput = (e) => {
    e.preventDefault();
    name = e.target.name; 
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
// handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    

   dispatch(userLogin(user))
   const token = JSON.parse(window.localStorage.getItem("token"));
   setCookie("token", token);
   
      // setUser({
      
      //   email: "",
      //   password: "",
      // });
      // setCookie('jwt')
      
     
    alert('click api ')
    navigate("/");
  };

  // user signup
  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(userSignup(user));
    // setUser({
    //   name: "",
    //   email: "",
    //   password: "",
    // });

    navigate("/");
  };

  return (
    <div className="nav-wraper">
      <nav class="navbar navbar-expand-lg shadow p-3 ">
        <div class="container">
          <Link to="/" className="nav-link">
            <a class="navbar-brand" href="#">
              {`<MS-CODER />`}
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon shadow">
              <i class="bi bi-list"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  WEB DESIGN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  LIFE-STYLE
                </a>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to="/videos">
                  VIDEOS
                </Link>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  data-bs-whatever="@mdo"
                >
                  <span className="link">SIGNUP</span>
                </a>
              </li>
              <li className="nav-item ">
                <Link to={`/profile`}>
                  <a className="nav-link active">
                    <span className="link">
                      <i className="bi bi-person-circle fs-1 "></i>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
            <form class="d-flex ms-auto shadow  align-items-center form">
              <input
                class=" me-2 input-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="submit" className="ms-auto">
                <span>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* form

*/}

      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div className="login">
                    <div className="details">
                      {account.view === "login" ? (
                        <div>
                          <h1>{account.heading}</h1>
                          <h3>{account.subHeading}</h3>
                        </div>
                      ) : (
                        <div>
                          <h1>{account.heading}</h1>
                          <h3>{account.subHeading}</h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  {/* signup form */}
                  <div className="signup-form">
                    {account.view === "signup" ? (
                      <form action="" method="POST">
                        <div class="form-floating mb-4">
                          <input
                            type="name"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={handleInput}
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Enter Your Name</label>
                        </div>
                        <div class="form-floating mb-4 ">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Enter Your Email</label>
                        </div>
                        <div class="input-password">
                          <input
                            type={show ? "password" : "text"}
                            className=""
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                            id="floatingInput"
                            placeholder="Enter Password.."
                          />

                          <a
                            type="submit"
                            className=" btn btn-danger show-btn"
                            onClick={showPassword}
                          >
                            {show ? "Show" : "Hide"}
                          </a>
                        </div>

                        {/* <input type="file"
                        accept="image/*"
                        onChange={(e)= postImage(e.target.file[0])}
                        
                        /> */}

                        <button
                          type="submit"
                          className="signup-btn"
                          onClick={handleSignup}
                        >
                          Signup
                        </button>

                        <h4
                          className="mt-4"
                          onClick={() => setAccount(initialValues.login)}
                        >
                          already have an account
                          <span className="text-info">Login</span>
                        </h4>
                      </form>
                    ) : (
                      <form action="">
                        <div class="form-floating mb-4">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={user.email}
                            onChange={handleInput}
                          />
                          <label for="floatingInput">Enter Your Email..</label>
                        </div>
                        <div class="form-floating mb-4">
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={user.password}
                            onChange={handleInput}
                          />
                          <label for="floatingInput">Enter Your Password</label>
                        </div>

                        <button className="signup-btn" onClick={handleSubmit}>
                          Login
                        </button>

                        <h4
                          className="mt-4"
                          onClick={() => setAccount(initialValues.signup)}
                        >
                          if you are new here{" "}
                          <span className="text-info">Signup</span>
                        </h4>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Blogbanner /> */}
    </div>
  );
};

export default Navbar;
