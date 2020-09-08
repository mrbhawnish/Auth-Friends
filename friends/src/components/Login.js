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
       axios
       .post("http://localhost:5000/api/login", credentials)
       .then((res) => {
  
        localStorage.setItem("token", res.data.token);
        //  this.props.history.push("/protected");
    })
    .catch(err => console.log(err))
   }
  return(
      <div>
    <form onSubmit={login}>
       <input 
       type="text" 
       name="username" 
       value={credentials.username}
       onChange={handleChanges} 
        />
       <input 
       type="text" 
       name="password" 
       value={credentials.password} 
       onChange={handleChanges}
        />

       <button>Submit</button>
    </form>
    </div>
  );

 };






export default Login;