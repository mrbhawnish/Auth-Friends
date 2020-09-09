import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner"
import AddFriends from "../components/AddFriends";
import "../App.css";
const FriendsList = () => {
   const [friends, setFriends] = useState([])
   const [isLoading, setLoading] = useState(false)
   useEffect(() => {
    setLoading(true)
       getData();
   }, []);
    
   const getData = () => {
       
     axiosWithAuth()
     .get("http://localhost:5000/api/friends")
     .then(res => {
         setLoading(false)
         setFriends(res.data)
     })
     .catch(err => console.log(err))
   };
    
    return(
    <>
      {isLoading && <Loader className="spinner"/>}
     
      {friends.map((friend, i) => (
        <div key={i}>
       <h1>Name: {friend.name}</h1>
       <h2>Email: {friend.email}</h2>
       </div>
      )
      )}
     
     <AddFriends />
    </>
    
    
    );

}


export default FriendsList;