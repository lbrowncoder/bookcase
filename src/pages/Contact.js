import React, { useState } from 'react';

const Contact = () => {
    const [name,setName] = useState('');
    const [ContactNumber,setContactNumber] = useState('');
    const [Message,setMeaagse] = useState('');
   
    function handleSubmit(event) {
      event.preventDefault();
      const 
      alert('A name was submitted: ' + name);
    }
  
      return (
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <label className="name">
             Name:
            <input  type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
  
            <label className="Number">
              Contact 
            <input type="number" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </label>
  
          <label className="message">
              Message
            <input type="text" value={Message} onChange={(e) => setMeaagse(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
      
        </form>
      
      );
      }

export default Contact