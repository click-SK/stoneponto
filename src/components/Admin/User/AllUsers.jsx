import React, { useState, useEffect } from "react";
import CurrentUser from "./CurrentUser";
import "../../../style/editUser.scss";
import Loader from "../../Loader/Loader";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    fetch("http://91.206.30.132:4444/get-all-user")
      .then((res) => res.json())
      .then((res) => {
        const arr = res.slice(1);
        // Сортуємо користувачів за алфавітом
        arr.sort(compareNames);
        setAllUsers(arr);
      });
  }, [isFetch]);

  // Функція для порівняння імен користувачів
  function compareNames(a, b) {
    return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
  }

  return (
    <div className="edit_user_wrap">
      {allUsers.length !== 0 ? (
        <>
          {allUsers.map((user) => (
            <div className="user_wrap" key={user._id}>
              <CurrentUser user={user} setIsFetch={setIsFetch} />
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AllUsers;
