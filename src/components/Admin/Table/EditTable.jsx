import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DisplayAdminTableOrder from "./DisplayAdminTableOrder";
import socket from "../../../socket/socket";
import { ExportCSV } from "../../ExelTable/ExportCSV";
import "../../../style/table.scss";
import Loader from "../../Loader/Loader";
import ConfirmationModal from "../../Modal/ConfirmationModal";
import axios from "axios";
import { BASE_URL } from "../../../http/BaseUrl";
const EditTable = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const [uniqueStatuses, setUniqueStatuses] = useState(['New', 'В роботі', 'Виконано', 'Видалено']);
  const [isFilterArray, setIsFilterArray] = useState(false);
  const [currentFilteredUser, setCurrentFilteredUser] = useState("");
  const [isFetch, setIsFetch] = useState(false);
  const [isCleartable, setIsClearTable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmptyTables, setIsEmptyTables] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const { t } = useTranslation();

  const [totalBalance, setTotalBalance] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const dateTime = new Date(); // Отримати поточну дату та час

  const day = dateTime.getDate().toString().padStart(2, "0"); // День з лідируючим нулем
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Місяць з лідируючим нулем (у JavaScript місяці починаються з 0)
  const year = dateTime.getFullYear().toString(); // Рік
  const hours = dateTime.getHours().toString().padStart(2, "0"); // Година з лідируючим нулем
  const minutes = dateTime.getMinutes().toString().padStart(2, "0"); // Хвилина з лідируючим нулем
  const seconds = dateTime.getSeconds().toString().padStart(2, "0"); // Секунда з лідируючим нулем

  const formattedDateTime = `${day} ${month} ${year} ${hours}_${minutes}_${seconds}`; // Форматований рядок дати та часу

  const itemsPerPage = 50;

  useEffect(() => {
    setTimeout(() => {
      setIsEmptyTables(true);
    }, 5000);
  }, []);

  useEffect(() => {
    socket.on("new table", (user) => {
      setIsFetch((state) => !state);
    });
    socket.on("update table", (user) => {
      setIsFetch((state) => !state);
    });
  }, []);

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

  useEffect(() => {
    if (isFilterArray) {
      filterOnUserFunc(currentFilteredUser);
    }
  }, [allOrders]);

  useEffect(() => {
    if (allOrders.length !== 0) {
      let totalSum = 0;
      allOrders.forEach((item) => {
        totalSum = item.balans + totalSum;
      });
      setTotalBalance(totalSum.toFixed(0));
    }
  }, [allOrders]);

 

  setInterval(() => {
    window.location.reload();
  }, 600000);

  console.log('allOrders',allOrders);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentOrders.slice(indexOfFirstItem, indexOfLastItem);
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(currentOrders.length / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  useEffect(() => {
    const usersArr = [...new Set(allOrders.map((item) => item.user.name))];
    const statusArr = [...new Set(allOrders.map((item) => item.status.name))];
    function compareNames(a, b) {
      // Переводимо обидва імені у нижній регістр перед порівнянням
      a = a.toLowerCase();
      b = b.toLowerCase();
      // Порівнюємо кириличні символи з використанням localeCompare
      const compareCyrillic = a.localeCompare(b, "en", { sensitivity: "base" });

      // Якщо кирилиця різна, повертаємо результат порівняння кириличних символів
      if (compareCyrillic !== 0) {
        return compareCyrillic;
      }

      // Якщо кирилиця однакова, повертаємо результат порівняння вихідних імен
      return a.localeCompare(b, undefined, { sensitivity: "base" });
    }

    // Сортуємо масив імен
    usersArr.sort(compareNames);
    setUniqueUsers(usersArr);
    // setUniqueStatuses(statusArr);
    
  }, [allOrders, currentOrders]);

  // useEffect(() => {
  //   fetch(`${BASE_URL}/get-all-user`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const arr = res.slice(1);
  //       // Сортуємо користувачів за алфавітом
  //       arr.sort(compareNames);
  //       setAllUsers(arr);
  //     }).catch((error) => {
  //       console.log('error',error);
  //     });
  // }, [isFetch]);

  useEffect(() => {
    fetch(`${BASE_URL}/get-all-users-name`)
      .then((res) => res.json())
      .then((res) => {
        // Сортуємо користувачів за алфавітом
        setAllUsers(res);
      }).catch((error) => {
        console.log('error',error);
      });
  }, [isFetch]);

  // Функція для порівняння імен користувачів
  function compareNames(a, b) {
    return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
  }

  const getAllTables = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-table`, {
        params: { page: currentPage, limit: 50, },
      });
      if (response.data.length) {
        setCurrentOrders(response.data);
        setAllOrders(response.data);
      } else {
        const lastPage = currentPage - 1;
        setCurrentPage(lastPage);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  const filterOnUserFunc = async (e) => {
    try {
      if(e == "Всі") {
        setCurrentPage(1);
        return getAllTables();
      }
      const response = await axios.get(`${BASE_URL}/get-tables-sort-by-user`, {
        params: { name: e },
      })
  
      const data = await response.data;
  
      if(data.length) {
        setAllOrders(data)
      }
    } catch(error) {
      console.log('error',error);
    }
  };

  const filterStatusFunc = async (e) => {
    try {
      if(e == "Всі") {
        setCurrentPage(1);
        return getAllTables();
      }
      const response = await axios.get(`${BASE_URL}/get-tables-sort-by-status`, {
        params: { status: e },
      })
  
      const data = await response.data;
      if(data.length) {
        setAllOrders(data)
      }
    } catch(error) {
      console.log('error',error);
    }
  };

  const filterDateFunc = async (e) => {
    try {
      const response = await axios.get(`${BASE_URL}/get-tables-sort-by-date`, {
        params: { date: e },
      })
  
      const data = await response.data;
  
      if(data.length) {
        setAllOrders(data)
      }
    } catch(error) {
      console.log('error',error);
    }
  };

  const handleClearTable = () => {
    fetch(`${BASE_URL}/delete-all-tables`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log('error',error);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  console.log('allUsers',allUsers);

  const orders = allOrders.map((item) => {
    const conditions = item?.conditions;
    const description = Object.keys(conditions)
      .filter((key) => conditions[key].name !== "")
      .map(
        (key) =>
          `${conditions[key].option} ${conditions[key].name} ${
            conditions[key]?.value ? `: ${conditions[key]?.value}` : " "
          }`
      )
      .join(", ");

    return {
      Id: item?.id,
      Дата: item?.date,
      Пользователь: item?.user.name,
      Файл: item?.fileName,
      Материал: item?.material,
      Качество: item?.quality,
      Ширина: item?.width,
      Высота: item?.height,
      Тираж: item?.count,
      Сума: item?.sum,
      Опис:
        description +
        (description ? ` ; ` : "") +
        item?.address +
        (item?.address ? ` ; ` : "") +
        item?.notes,
      Cтатус: item?.status?.name,
    };
  });

  console.log('allOrders',allOrders);

  return (
    <div className="table_wrap">
      {allOrders.length != 0 && currentOrders.length != 0 ? (
        <>
          <div className="btn_exel">
            <ExportCSV csvData={orders} fileName={formattedDateTime} />
          </div>

          <div className="table_header">
            <div className="table_header_item table_header_id">
              <p>Id</p>
            </div>
            <div className="table_header_item table_header_date">
              <p>{t(`Date`)}</p>
              <input
                type="date"
                onChange={(e) => filterDateFunc(e.target.value)}
              />
            </div>
            <div className="table_header_item table_header_name">
              <p>{t(`User`)}</p>
              <select onChange={(e) => filterOnUserFunc(e.target.value)}>
                <option 
                style={{overflowY: 'auto'}}
                >Всі</option>
                {allUsers.map((user) => (
                  <option key={user.name} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="table_header_item table_header_file">
              <p>{t(`The name of the file`)}</p>
            </div>
            <div className="table_header_item table_header_materials">
              <p>{t(`Material`)}</p>
            </div>
            <div className="table_header_item table_header_quality">
              <p>{t(`Quality`)}</p>
            </div>
            <div className="table_header_item table_header_width">
              <p>{t(`Width`)}</p>
            </div>
            <div className="table_header_item table_header_hight">
              <p>{t(`Height`)}</p>
            </div>
            <div className="table_header_item table_header_hight">
              <p>Тираж</p>
            </div>
            <div className="table_header_item table_header_sum">
              <p>{t(`Sum`)}</p>
            </div>
            <div className="table_header_item table_header_descript">
              <p>{t(`Condition`)}</p>
            </div>
            <div className="table_header_item table_header_status">
              <p>{t(`Status`)}:</p>
              <select onChange={(e) => filterStatusFunc(e.target.value)}>
                <option>{t(`All`)}</option>
                {uniqueStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="table_body">
            {allOrders.map((el) => (
              <DisplayAdminTableOrder
                key={el.id}
                order={el}
                setIsFetch={setIsFetch}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentPage}
          </div>
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
          <div className="clear_table_button_wrap">
            <button
              className="clear_table_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              Очистити таблицю
            </button>
          </div>
          <ConfirmationModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            func={handleClearTable}
          />
        </>
      ) : (
        <>
          {!isEmptyTables ? (
            <Loader />
          ) : (
            <div className="not_fount_order_wrap">
              <p>{t("Order not found paragraph 1")}</p>
              <p>{t("Order not found paragraph 2")}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EditTable;
