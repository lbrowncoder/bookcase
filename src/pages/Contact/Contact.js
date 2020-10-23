import React, { useState } from 'react';
import { useHistory } from "react-router";
import '../Contact/Contact.css';


const Contact = () => {
    const [name,setName] = useState('');
    const [ContactNumber,setContactNumber] = useState('');
    const [Message,setMeaagse] = useState('');
    const history = useHistory();
   
    function handleSubmit(event) {
      event.preventDefault();
      history.push('/pages/SubmittedForm/SubmittedForm')
    }
      return (
        <div className = "FormBox">
        <form  onSubmit={(e) => handleSubmit(e)} className="form">
          <label className="name">
             Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
  
            <label className="Number">
              Contact Number
            <input className= "NumberBox" type="number" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </label>
  
          <label className="Message">
              Message
            <input className= "MessageBox" type="text" value={Message} onChange={(e) => setMeaagse(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>     
      );
      }

export default Contact