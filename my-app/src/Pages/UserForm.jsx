import React, { useState } from 'react'

const UserForm = () => {
  const [form , setForm] = useState({
    UserName : '',
    userEmail : '',
    userPassword : '',
    confirmPassword: ""

  })

  const [error , setError ] = useState({});


  const   handelForm = (e) => {
    const {name , value } = e.target ; 
           
       setForm(
        {
          ...form , 
          [name] : value 
        });      
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const  nameRegex = /^[A-Za-z ]{3,30}$/; 



  const valiData = () => {
    let UserError  = {};
      
      if (!nameRegex.test(form.UserName)) {
        UserError.UserName = "Name must be 3-30 letters only"; 
      }
     
       if (!emailRegex.test(form.userEmail)) {
        UserError.userEmail = "not valid name "; 
      }
       if (!passwordRegex.test(form.userPassword)) {
        UserError.userPassword  = "Password must contain 8+ characters, uppercase, lowercase, number & special character."; 
      }

      if (form.userPassword !== form.confirmPassword) {
        UserError.confirmPassword = 'Check your Pasword ' 
      }

      setError(UserError);
       
       return Object.keys(UserError).length === 0 ; 
       };

  return (
   <form onSubmit={handelForm}>
         <h1>
          Login Form 
         </h1>

        <input
  type="text"
  name="UserName"
  placeholder="Enter your name"
  value={form.UserName}
  onChange={handelForm}
/>
<p>{error.UserName}</p>

<input
  type="email"
  name="userEmail"
  placeholder="Enter your email"
  value={form.userEmail}
  onChange={handelForm}
/>
<p>{error.userEmail}</p>

<input
  type="password"
  name="userPassword"
  placeholder="Enter your password"
  value={form.userPassword}
  onChange={handelForm}
/>
<p>{error.userPassword}</p>

<input
  type="password"
  name="confirmPassword"
  placeholder="Confirm your password"
  value={form.confirmPassword}
  onChange={handelForm}
/>
<p>{error.confirmPassword}</p>

<button type="submit">Login</button>
 

   </form>
  )
}

export default UserForm  