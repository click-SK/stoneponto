import React, {useState, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import DisplayUserTableOrder from './DisplayUserTableOrder';
import Pagination from '../template/Pagination';
import axios from 'axios';
import { BASE_URL } from '../../http/BaseUrl';
import { ExportCSV } from "../ExelTable/ExportCSV";
import socket from '../../socket/socket'
import '../../style/userProfile.scss'
import '../../style/table.scss'
import Loader from '../Loader/Loader';
const UserTable = ({ currentUser, setIsFetch, isFetch}) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);
  const [allOrders, setAllOrders] = useState([]);
  const [itemsPerPage] = useState(50);

  const dateTime = new Date(); // Отримати поточну дату та час
  
  const day = dateTime.getDate().toString().padStart(2, "0"); // День з лідируючим нулем
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Місяць з лідируючим нулем (у JavaScript місяці починаються з 0)
  const year = dateTime.getFullYear().toString(); // Рік
  const hours = dateTime.getHours().toString().padStart(2, "0"); // Година з лідируючим нулем
  const minutes = dateTime.getMinutes().toString().padStart(2, "0"); // Хвилина з лідируючим нулем
  const seconds = dateTime.getSeconds().toString().padStart(2, "0"); // Секунда з лідируючим нулем

  const formattedDateTime = `${day} ${month} ${year} ${hours}_${minutes}_${seconds}`; // Форматований рядок дати та часу

useEffect(() => {
  socket.on('new table',({user}) => {
    if(currentUser._id == user) {
      setIsFetch(state => !state)
    }
  });
  socket.on('update table',({user, status}) => {
    if(currentUser._id == user) {
      setIsFetch(state => !state)
    }
  });
}, []);

useEffect(() => {
  const fetchData = () => {
    getAllTables();
  };
  const timeoutId = setTimeout(() => {
    fetchData();
  }, 500); // Debounce the API call by 500ms

  return () => {
    clearTimeout(timeoutId);
  };
},[currentPage, isFetch])

const getAllTables = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-all-user-table`, {
      params: { page: currentPage, limit: itemsPerPage, id: currentUser._id },
    });
    if (response.data.length) {
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


  if(!allOrders.length) {
    return(
      <Loader/>
    )
  }

    return (
      <div className="table_wrap">
        <div className="table_header">
          <div className="table_header_item table_header_id">
            <p>Id:</p>
          </div>
          <div className="table_header_item table_header_date">
            <p>{t(`Date`)}:</p>
          </div>
          <div className="table_header_item table_header_file">
            <p>{t(`The name of the file`)}:</p>
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
          </div>
        </div>
        <div className="table_body">
          {allOrders.map((order) => (
            <DisplayUserTableOrder
              key={order.id}
              order={order}
              currentUser={currentUser}
            />
          ))}
        </div>
        <Pagination
        currentPage={visibleCurrentPage}
        setCurrentPage={setCurrentPage}/>
        <div className="btn_exel">
            <ExportCSV csvData={orders} fileName={formattedDateTime} />
          </div>
      </div>
    );
};

export default UserTable;