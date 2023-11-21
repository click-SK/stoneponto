import React, { useState, useEffect } from "react";
import CurrentUser from "./CurrentUser";
import "../../../style/editUser.scss";
import Loader from "../../Loader/Loader";
import { BASE_URL } from "../../../http/BaseUrl";
import axios from "axios";
const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/get-all-user`)
  //     .then((res) => {
  //       const arr = res.data.slice(1);
  //       console.log('work all users',arr);
  //       // Сортуємо користувачів за алфавітом
  //       arr.sort(compareNames);
  //       setAllUsers(arr);
  //     });
  // }, [isFetch]);

  useEffect(() => {
    console.log('change current page');
    const fetchData = () => {
      getAllTables();
    };
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Debounce the API call by 500ms

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isFetch, currentPage]);

  const getAllTables = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-user-pagination`, {
        params: { page: currentPage, limit: 10, },
      });
      if (response.data.length) {
        setAllUsers(response.data);
      } else {
        const lastPage = currentPage - 1;
        setCurrentPage(lastPage);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

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
      {!!allUsers.length && 
      <div>
      <div>{currentPage}</div>
            <div className="pagination">
            <button
              className="btn"
              disabled={currentPage == 1 ? true : false}
              onClick={() => setCurrentPage((state) => (state -= 1))}
            >
              <img src="/img/left-pagination.svg" alt="Previous" />
            </button>
            <button
              className="btn"
              onClick={() => setCurrentPage((state) => (state += 1))}
            >
              <img src="/img/right-pagination.svg" alt="Next" />
            </button>
          </div>
      </div>
      }
    </div>
  );
};

export default AllUsers;
