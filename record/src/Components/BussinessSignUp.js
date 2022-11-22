import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const BussinessSignUp = () => {
  const [firstName, setFName] = useState(' ');
  const [lastName, setLName] = useState(' ');
  const [emailId, setEmail] = useState(' ');
  const [password, setPwd] = useState(' ');

  const setFirstName = (e) => {
      setFName(e.target.value);
  }
  const setLastName = (e) => {
      setLName(e.target.value);
  }
  const setemailId = (e) => {
      setEmail(e.target.value);
  }
  const setPassword = (e) => {
      setPwd(e.target.value);
  }
  const navigate = useNavigate();
  const register = (e) => {
      e.preventDefault();
      //call signup API
      let data = {
          firstName: firstName,
          lastName: lastName,
          email: emailId,
          password: password
      }


      axios.post('http://localhost:7001/employee/addemployee', data)
          .then(response => response.data)
          .then(data => {
              if (data.length === 0) {
                  alert("Not data show register page");
                   } else {
                   swal({
                      title: "Register!",
                      text: "Register successfull!!",
                      icon: "success",
                      button: "ok!",
                    });
                  let loggedUser = data;
                  console.log(data);
                  navigate('/login');

              }
          })
            
      }
      const myStyle = {
          backgroundImage:
              "url('./bussinesssignup.jpg')",
          height: '110vh',
          backgroundSize: 'cover',
      };
  return (
    <div className="Auth-form-container" style={myStyle}>
    <form className="Auth-form" onSubmit={e => register(e)}>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Bussiness SignUp</h3>
            <div className="text-center">
                Already Registered?
                <Link to="/businesslogin">BussinessLogin</Link>
            </div>
            <div className="form-group mt-3">
                <label>First Name</label>
                <input type="text"
                    className="form-control mt-1"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Last Name</label>
                <input type="text"
                    className="form-control mt-1"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Email</label>
                <input type="email"
                    className="form-control mt-1"
                    placeholder="Email"
                    onChange={(e) => setemailId(e)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e)}
                />
            </div>

            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >
                    Submit
                </button>
            </div>

        </div>
    </form>
</div>
  )
}

export default BussinessSignUp