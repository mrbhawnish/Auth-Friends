import React, { useState } from "react";
import axios from "axios";

 const Login = (props) => {
   const [credentials, setCredentials] = useState({
       username: "",
       password: ""
   })
   const [isLoading, setLoading] = useState(false)


   const handleChanges = (e) => {
       setCredentials({...credentials,
       [e.target.name]: e.target.value
     })
   }

   const login = (e) => {
       e.preventDefault();
       setLoading(true)
       axios
       .post("http://localhost:5000/api/login", credentials)
       .then((res) => {
        localStorage.setItem("token", res.data.payload);
         props.history.push("/protected");
    })
    .catch(err => console.log(err))
   }
  return(
    
    <div>
    {isLoading && <h1>Please Wait..</h1>}
         <h1>Login</h1>
      <div className="loginForm">
        
    <form className="loginChild" onSubmit={login}>

       <input 
       type="text" 
       name="username" 
       placeholder="username"
       value={credentials.username}
       onChange={handleChanges} 
        />
       <input 
       type="text" 
       name="password" 
       placeholder="password"
       value={credentials.password} 
       onChange={handleChanges}
        />
       <div>
       <button>Submit</button>
       </div>
    </form>
    </div>
    </div>
  );

 };






export default Login;