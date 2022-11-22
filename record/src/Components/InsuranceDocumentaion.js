import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



const InsurenceDocumentaion = () => {
  
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
const navigateKeyc = () => {
    navigate('/keys')
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
          text: "keyc added Successfully !!",
          icon: "success",
          button: "ok!",
        });
      navigate('/home');
  }

  const myStyle = {
      backgroundImage:
          "url('./insurence.jpg')",
      height: '170vh',
      backgroundSize: 'cover',
  };
  return (
    <div className="Auth-form-container" style={myStyle}>
            <form className="Auth-form" onSubmit={e => addemployee(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Life Incrence form</h3>

                    <div className="form-group mt-3">
                        <label>Policy Type</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter policy Name"
                            onChange={(e) => setPoliceType(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>policyNo</label>
                        <input type="Number"
                            className="form-control mt-1"
                            placeholder="Enter your policy No "
                            onChange={(e) => setpolicyNo(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>email</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter the email"
                            onChange={(e) => setEmailId(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Insurance's Name</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="please enter Insurence Name"
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
                        <label>occupation Details</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="please enter occupations Details"
                            onChange={(e) => setoccupationDetails(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Education Details</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter education details"
                            onChange={(e) => seteducationDetails(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>desigination of the Employee</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter designation of the employee"
                            onChange={(e) => setdesignation(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>medical Status</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter medical status"
                            onChange={(e) => setmedicalStatus(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>premiumAmout</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter premium amout"
                            onChange={(e) => setpremiumAmount(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Annual Amount</label>
                        <input type="Number"
                            className="form-control mt-1"
                            placeholder="Enter your Annual amount"
                            onChange={(e) => setannualAmount(e)}
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
                        <button type="submit" className="btn btn-primary" onClick={navigateKeyc}>submit</button>

                    </div>

                </div>
            </form>
        </div>
  )
}

export default InsurenceDocumentaion