import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import React from "react";
import { useState } from 'react';


function App({local_variable}) {
  const [checked, setChecked] = useState(true); 

  const   a= [{
    name:'pran'
  },
  {
    name:'rahul'
  }]
  function handleChange(e) {
    setChecked(e.target.checked);
 }

 
  return (
    <div className="App">
      if (e.target.checked) {
// alert("pranesh")   
   }
 <h1>{local_variable}</h1>

 <button>hh</button>
<br>
</br>
{a.map((user) => (
        <div className="user">{user.name}</div>
      ))}
          <input  type="checkbox" onChange={handleChange} /> 

    </div>
  );
}


const mapStateToProps =state =>({
  local_variable : state
})
export default connect(mapStateToProps)(App);
