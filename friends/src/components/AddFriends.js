import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriends = () => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now,
    name: "",
    age: "",
    email: "",
  });

  const handleChanges = (e) => {
    setAddFriend({ ...addFriend, 
      [e.target.name]: e.target.value
     });
  };

  const handlerSubmit = (e) => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", addFriend)
      .then((res) => {
        console.log("from add friends", res.data);
      })
      .catch((err) => console.log(err.error));
  };

  return (
    <div className="parentForm">
      <form className="form" onSubmit={handlerSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={addFriend.name}
            onChange={handleChanges}
          ></input>
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={addFriend.age}
            onChange={handleChanges}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={addFriend.email}
            onChange={handleChanges}
          ></input>
        </label>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddFriends;
