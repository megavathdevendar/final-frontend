import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'


const AdminLogin = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confirm, setConfirmPassword] = useState(''); 

    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const login = (e) => {
        e.preventDefault();
        if(password!=confirm){
            alert("password do not match")
        }
        else{
            let data = {
                email: email,
                password: password,
    
            };
            console.log(data);
    
            axios.post('http://localhost:7001/employee/Login', data)
                .then(response => response.data)
                .then(data => {
                    if (data.length === 0) {
                    
                        swal({
                            title: "ReLogin!",
                            text: "email or password wrong please enter correct password!!",
                            icon: "wrong",
                            button: "ok!",
                          });
    
                    } else {
                    
                        swal({
                            title: "HomePage!",
                            text: "Users found! u will be home page redirect!!",
                            icon: "success",
                            button: "ok!",
                          });
    
                        
                        let loggedUser = data;
                        console.log(loggedUser);
                        navigate('/home');

                    }
                })
        }
        }
        const myStyle={
            backgroundImage: 
     "url('./adminlogin.jpeg')",
            height:'110vh',
            backgroundSize: 'cover',
        };
  return (
    <div className="Auth-form-container" style={myStyle}>
            <form className="Auth-form" onSubmit={e => login(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Admin Login</h3>
                    <div className="text-center">
                        Already Registered?
                        <Link to="/adminsignup">AdminSignUp</Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password"
                            className="form-control mt-1"
                            placeholder="valid password"
                            onChange={handlePassword}
                        />
                        
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter the password"
                            onChange={handleConfirmPassword}
                        />
                        
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        
                    {/* <p className="forgrt password text-Right mt-2"></p>
                        <Link to={'/forget'}>Forget password?</Link> */}
                    </div>
                </div>
            </form>
        </div>
  )
}

export default AdminLogin