import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DisplayAdminTableOrder from "./DisplayAdminTableOrder";
import socket from "../../../socket/socket";
import { ExportCSV } from "../../ExelTable/ExportCSV";
import "../../../style/table.scss";
import Loader from "../../Loader/Loader";
import ConfirmationModal from "../../Modal/ConfirmationModal";
import Pagination from "../../template/Pagination";
import axios from "axios";
import { BASE_URL } from "../../../http/BaseUrl";
const EditTable = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [uniqueStatuses] = useState(['New', 'В роботі', 'Виконано', 'Видалено']);
  const [isFilterArray, setIsFilterArray] = useState(false);
  const [currentFilteredUser, setCurrentFilteredUser] = useState('');
  const [isFetch, setIsFetch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmptyTables, setIsEmptyTables] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentFilterStatus, setCurrentFilterStatus] = useState('Всі');
  const [currentFilterUser, setCurrentFilterUser] = useState('');
  const dateTime = new Date(); // Отримати поточну дату та час

  const day = dateTime.getDate().toString().padStart(2, "0"); // День з лідируючим нулем
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Місяць з лідируючим нулем (у JavaScript місяці починаються з 0)
  const year = dateTime.getFullYear().toString(); // Рік
  const hours = dateTime.getHours().toString().padStart(2, "0"); // Година з лідируючим нулем
  const minutes = dateTime.getMinutes().toString().padStart(2, "0"); // Хвилина з лідируючим нулем
  const seconds = dateTime.getSeconds().toString().padStart(2, "0"); // Секунда з лідируючим нулем

  const formattedDateTime = `${day} ${month} ${year} ${hours}_${minutes}_${seconds}`; // Форматований рядок дати та часу

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
    if(currentFilter == 'all') {
      const fetchData = () => {
        getAllTables();
      };
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 500); // Debounce the API call by 500ms
  
      return () => {
        clearTimeout(timeoutId);
      };
    } else if (currentFilter == 'status') {
      const fetchData = () => {
        filterStatusFunc(currentFilterStatus);
      };
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 500); // Debounce the API call by 500ms
  
      return () => {
        clearTimeout(timeoutId);
      };
    } else if (currentFilter == 'user') {
      const fetchData = () => {
        filterOnUserFunc(currentFilterUser);
      };
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 500); // Debounce the API call by 500ms
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isFetch, currentPage]);

  useEffect(() => {
    if (isFilterArray) {
      filterOnUserFunc(currentFilteredUser);
    }
  }, [allOrders]);

 

  setInterval(() => {
    window.location.reload();
  }, 600000);

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

  const getAllTables = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-table`, {
        params: { page: currentPage, limit: itemsPerPage },
      });
      if (response.data.length) {
        setCurrentOrders(response.data);
        setAllOrders(response.data);
        setVisibleCurrentPage(currentPage);
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
        setCurrentFilter('all');
        setCurrentPage(1);
        return getAllTables();
      }
      setCurrentFilterUser(e);
      setCurrentFilter('user');
      const response = await axios.get(`${BASE_URL}/get-tables-sort-by-user`, {
        params: { name: e, page: currentPage, limit: itemsPerPage  },
      })

      if (response.data.length) {
        setAllOrders(response.data)
        setVisibleCurrentPage(currentPage);
      } else {
        const lastPage = currentPage - 1;
        setCurrentPage(lastPage);
      }
    } catch(error) {
      console.log('error',error);
    }
  };

  console.log('currentFilterStatus', currentFilterStatus);

  const filterStatusFunc = async (e) => {
    try {
      if(e == "Всі") {
        setCurrentFilter('all');
        setCurrentPage(1);
        return getAllTables();
      }
      setCurrentFilterStatus(e);
      setCurrentFilter('status');

      const response = await axios.get(`${BASE_URL}/get-tables-sort-by-status`, {
        params: { status: e, page: currentPage, limit: itemsPerPage },
      })

      if (response.data.length) {
        setAllOrders(response.data)
        setVisibleCurrentPage(currentPage);
      } else {
        const lastPage = currentPage - 1;
        setCurrentPage(lastPage);
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
      setCurrentFilter('date');
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
                <option style={{ overflowY: "auto" }}>Всі</option>
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
          {currentFilter != "date" && (
            <Pagination
            currentPage={visibleCurrentPage}
            setCurrentPage={setCurrentPage}/>
          )}
          <div className="clear_table_button_wrap">
            <button
              className="clear_table_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {t(`Clar table`)}
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
