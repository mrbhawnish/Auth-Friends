import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWAuth } from "../utils/axiosWithAuth";


const FriendForm = (props) => {
    const defaultValue = {
      name: "",
      age: "",
      email: ""
    };
   const [newFriend, setNewFriend] = useState(defaultValue)
    const {go} = useHistory();

   const handleChanges = (e) => {
       const value =
        e.target.type === 'number' ?
         parseInt(e.target.value) : e.target.value;
     setNewFriend({...newFriend, 
       [e.target.name]: value
    })

   };

   const handleSubmit = (e) => {
       e.preventDefault();
     axiosWAuth()
     .post("http://localhost:5000/api/friends", newFriend)
     .then((res) => {
         console.log("res from newfriend", res)
         go(0)
     })
     .catch((err) => console.log(err))
   };
 return(
  <form onSubmit={handleSubmit}>
      <h1 style={{border: "1px solid black"}}>Add A New Friend</h1>
    <input
     name="name"
     type="text"
     placeholder="name"
     value={newFriend.name}
     onChange={handleChanges} />

    <input
     name="age"
     type="number"
     value={newFriend.age}
     placeholder="age"
     onChange={handleChanges} />

    <input
     name="email"
     type="text"
     placeholder="email"
     value={newFriend.email}
     onChange={handleChanges} />

     <button onClick={handleSubmit}>Add a Friend</button>
  </form>
 );

};

export default FriendForm;