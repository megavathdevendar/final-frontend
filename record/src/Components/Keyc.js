import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const Keyc = () => {
    const [policyType,setType] = useState('');
    const [policyNo,setNo] = useState('');
    const [emailId, setEmail] = useState('');
    const [insurenceName, setName] = useState('');
    const [contact, setCon] = useState('');
    const [occupationDetails, setDetails] = useState('');
    const [educationDetails, setNumber] =useState('');
    const [desigination, setEmployee] = useState('');
    const [medicalStatus, setStatus] = useState('');
    const [premiumAmout, setAmout] = useState('');
    const [annualAmout, setMoney] = useState('');
    const [address, setAddres] =useState('');
    const [pan,setPan] = useState('');
  
    const setPoliceType = (e) => {
        setType(e.target.value);
    }
    const setpolicyNo = (e) =>{
      setNo(e.target.value);
    }
    const setEmailId = (e) => {
        setEmail(e.target.value);
    }
  
    const setinsurenceName= (e) => {
        setName(e.target.value);
    }
    const setContact = (e) => {
        setCon(e.target.value);
    }
    const setoccupationDetails = (e) => {
        setDetails(e.target.value);
    }
    const seteducationDetails = (e) => {
      setNumber(e.target.value);
  }
  const setdesignation = (e) =>{
    setEmployee(e.target.value);
  }
  const setmedicalStatus = (e) => {
      setStatus(e.target.value);
  }
  
  const setpremiumAmount= (e) => {
      setAmout(e.target.value);
  }
  const setannualAmount = (e) => {
      setMoney(e.target.value);
  }
  const setaddres = (e) => {
      setAddres(e.target.value);
  }
  const setpan = (e) => {
    setPan(e.target.value);
}
    const navigate = useNavigate();
  
    const addemployee = (e) => {
        e.preventDefault();
        let data = {
            policyType: policyType,
            policyNo: policyNo,
            email: emailId,
            insurenceName: insurenceName,
            contact: contact,
            occupationDetails: occupationDetails,
            educationDetails: educationDetails,
            desigination: desigination,
            medicalStatus: medicalStatus,
            premiumAmout:premiumAmout,
            annualAmout:annualAmout,
            pan:pan,
            address: address
  
        }
  
        fetch('http://localhost:7001/employee/addemployee', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json())
            .then(json => console.log(json));
  
        
        swal({
            title: "sucess!",
            text: "employee Added Successfully !!",
            icon: "success",
            button: "ok!",
          });
        navigate('/home');
    }
  
    const myStyle = {
        backgroundImage:
            "url('./keyss.jpeg')",
        height: '170vh',
        backgroundSize: 'cover',
    };
    return (
        <div className="Auth-form-container" style={myStyle}>
            <form className="Auth-form" onSubmit={e => addemployee(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Keys Form</h3>

                    <div className="form-group mt-3">
                        <label>client id</label>
                        <input type="Number"
                            className="form-control mt-1"
                            placeholder="Enter client id number"
                            onChange={(e) => setPoliceType(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your Name "
                            onChange={(e) => setpolicyNo(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your emailid"
                            onChange={(e) => setEmailId(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Gender</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="please enter gender NAme"
                            onChange={(e) => setinsurenceName(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Phone No</label>
                        <input type="number"
                            className="form-control mt-1"
                            placeholder="please enter phone number."
                            onChange={(e) => setContact(e)}
                        />
                       </div>
                    <div className="form-group mt-3">
                        <label>Age</label>
                        <input type="number"
                            className="form-control mt-1"
                            placeholder="please enter your age"
                            onChange={(e) => setoccupationDetails(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>city</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your city Name"
                            onChange={(e) => seteducationDetails(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>State</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your state Name"
                            onChange={(e) => setdesignation(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>country</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your country name"
                            onChange={(e) => setmedicalStatus(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Nationality</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter ur Nation"
                            onChange={(e) => setpremiumAmount(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Aaddher No</label>
                        <input type="Number"
                            className="form-control mt-1"
                            placeholder="Enter your Aaddher Number"
                            onChange={(e) => setannualAmount(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Pan No</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your Pan Number"
                            onChange={(e) => setpan(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Address</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter your address"
                            onChange={(e) => setaddres(e)}
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">submit</button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Keyc