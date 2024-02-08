import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar/Navbar";


const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const handleClick = () => {
    if (!loginUserName || !loginPassword) {
      toast.error("Login Fail!,Please provide both username and password. ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/login");
        },
      });

      return;
    }

    const foundUser = users.find(
        (user) =>
          user.username === loginUserName && user.password === loginPassword
      );


// 
    // if (foundUser && foundUser.userName === "admin") {
    //   toast.success("Successfully Logged in as Admin!", {
    //     position: "top-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   new Promise((resolve) => setTimeout(resolve, 5000));
    //   navigate("/adduser");
    // } else
    if (foundUser) {
      toast.success("Successfully Logged in!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/adduser/home1");
        },
      });
    } else {
      toast.error(
        "Login Fail!,Please provide correct username and password. ",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };
  return (
    <div>
      {/* <Navbar/> */}
      {/* <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow space'>
                

                <h2 className='text-center m-4'>Register User</h2>
                <form >
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input
                type="text"
                placeholder="User Name"
                name="loginUserName"
                value={loginUserName}
                onChange={(e) => setLoginUserName(e.target.value)}
              />
                    </div>

                  

                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>
                            E-mail
                        </label>
                        <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
                    </div>
                    
                   
                    
                   
                </form>



            </div> */}

      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow space">
        <div className="text-center m-4">
          <div className="login">
            <div className="login">Log In</div>
            <div className="underline"></div>
          </div>
                <div> </div>
          <div className="form-label mt-3">
            <div className="form-control">
              {/* <img src={user} alt="" /> */}
              <input
                type="text"
                placeholder="User Name"
                name="loginUserName"
                value={loginUserName}
                onChange={(e) => setLoginUserName(e.target.value)}
              />
            </div>

          <div>
          <div className="form-control mt-4">
              {/* <img src={Lock} alt="" /> */}
              <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>
          </div>

          <div className="forgot-password mt-3" style={{color:"black"}}>
            If you don't have an account?{" "}
            <span>
              <Link to="/adduser">Create</Link>
            </span>
          </div>

          <div className="submit-container" style={{marginLeft:"210px"}}>
            <button className="btn btn-primary align" onClick={handleClick}>
              Log In
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;