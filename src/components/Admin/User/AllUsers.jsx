import React, { useState, useEffect } from "react";
import CurrentUser from "./CurrentUser";
import '../../../style/editUser.scss'

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    fetch("https://server-ponto-print.herokuapp.com/get-all-user")
      .then((res) => res.json())
      .then((res) => {
        const arr = res.slice(1);
        setAllUsers(arr);
      });
  }, [isFetch]);


  return (
    <div className="edit_user_wrap">
      {allUsers &&
        allUsers.map((user) => (
          <div
          className="user_wrap"
          key={user._id}>
            <CurrentUser 
            user={user}
            setIsFetch={setIsFetch}/>
          </div>
        ))}
    </div>
  );
};

export default AllUsers;
