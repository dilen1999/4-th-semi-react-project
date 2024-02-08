import axios from 'axios';
import "./AddUser.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';





export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password:""
    })

    const { name, username, email,password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/login")
    };


  

    return (



        <div className='row cloumn'>
            
            
            <Navbar />
           

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow space'>
                

                <h2 className='text-center m-4'>Register User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your name'
                            name='name'
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                  

                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>
                            E-mail
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            name='email'
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                            Username
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your username'
                            name='username'
                            value={username}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input
                            type={"password"}
                            className='form-control'
                            placeholder='Enter your password'
                            name='password'
                            value={password}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-outline-danger mx-2">
                        Submit/Login
                    </button>
                   

                    <Link className='btn btn-outline-danger mx-2' to="/">
                        Cancel
                    </Link>
                </form>



            </div>
        </div>



    )
}
