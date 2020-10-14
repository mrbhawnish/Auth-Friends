import React, { useState, useHistory } from "react";
import { axiosWAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [ isLoading, setLoading] = useState(false);
  
  

  const handleChanges = (e) => {
    e.persist();
    setCredentials({...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWAuth()
    .post("http://localhost:5000/api/login", credentials)
    .then((res) => {
       
        // console.log("login res:", res)
        localStorage.setItem("token", res.data.payload)
         props.history.push("/friends")
         setLoading(true)
    })
    .catch((err) => console.log(err))

  };

  return (
      <>
   { isLoading ? 

   <Loader
   type="Puff"
   color="#00BFFF"
   height={100}
   width={100}
   timeout={2000} //3 secs

/>
   : <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={credentials.username || ''} 
        onChange={handleChanges}
      />

      <input
        type="text"
        name="password"
        placeholder="password"
        value={credentials.password || ''} 
        onChange={handleChanges}
      />
      <button>Login</button>
    </form> }
    </>
  );
};

export default Login;
