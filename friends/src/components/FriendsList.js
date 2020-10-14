import React, { useState, useEffect } from "react";
import { axiosWAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
import Loader from "react-loader-spinner";

const FriendsList = () => {
   const [friends, setFriends] = useState([])
   const [ isLoading, setLoading] = useState(false);

    useEffect(() => {
        axiosWAuth()
        .get("http://localhost:5000/api/friends")
        .then((res) => {
            // console.log("this is res", res)
            setFriends(res.data)

        })
        .catch((err) => console.log(err))
    }, [])

    

   return(
       <>
     { !friends.length ? <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={2000} //3 secs
 
      /> :  
        friends.map((friend, i) => (
         <div key={i}>
            
         <h1>Name: {friend.name}</h1>
         <h1>Age: {friend.age}</h1>
         <h1>Email: {friend.email}</h1>
         <button>Update</button>
         <button>Delete</button>
         </div>
        
      ))}

      <FriendForm />
    </>
   
   );
};

export default FriendsList;