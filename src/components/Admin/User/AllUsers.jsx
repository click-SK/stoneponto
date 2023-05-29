import React, { useState, useEffect } from "react";
import CurrentUser from "./CurrentUser";
const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    fetch("https://ponto-print.herokuapp.com/get-all-user")
      .then((res) => res.json())
      .then((res) => {
        const arr = res.slice(1);
        setAllUsers(arr);
      });
  }, [isFetch]);

  console.log("allUsers", allUsers);

  return (
    <div>
      {allUsers &&
        allUsers.map((user) => (
          <div key={user._id}>
            <CurrentUser 
            user={user}
            setIsFetch={setIsFetch}/>
          </div>
        ))}
    </div>
  );
};

export default AllUsers;
