import React, {useState, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import DisplayUserTableOrder from './DisplayUserTableOrder';
import { ExportCSV } from "../ExelTable/ExportCSV";
import socket from '../../socket/socket'
import '../../style/userProfile.scss'
import '../../style/table.scss'
const UserTable = ({allOrders, currentUser, setIsFetch}) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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
      // if(status) {

      // }
      setIsFetch(state => !state)
    }
  });
}, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allOrders.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allOrders.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const chosePage = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    let renderedPages = [];
  
    if (pageNumbers.length <= 5) {
      renderedPages = pageNumbers;
    } else {
      if (currentPage === 2) {
        renderedPages = [1, currentPage, currentPage + 1, pageNumbers.length];
      } else if (currentPage <= 3) {
        renderedPages = [...pageNumbers.slice(0, 4), pageNumbers.length];
      } else if (currentPage >= pageNumbers.length - 2) {
        renderedPages = [1, ...pageNumbers.slice(pageNumbers.length - 4)];
      } else {
        renderedPages = [1, currentPage - 1, currentPage, currentPage + 1, pageNumbers.length];
      }
    }
  
    return renderedPages.map((page) => {
      if (page === '...') {
        return <p key={page}>{page}</p>;
      } else {
        return (
          <p
            style={{ padding: '0px 10px', fontSize: '18px', cursor: 'pointer' }}
            key={page}
            onClick={() => chosePage(page)}
            className={`${page == currentPage ? 'bold' : ''}`}
          >
            {page}
          </p>
        );
      }
    });
  };

  const orders = currentItems.map((item) => {
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
          {currentItems.map((order) => (
            <DisplayUserTableOrder
              key={order.id}
              order={order}
              currentUser={currentUser}
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
          {renderPageNumbers()}
        </div>
        <div className="pagination">
          <button
            className="btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <img src="/img/left-pagination.svg" alt="Previous" />
          </button>
          <button
            className="btn"
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            <img src="/img/right-pagination.svg" alt="Next" />
          </button>
        </div>
        <div className="btn_exel">
            <ExportCSV csvData={orders} fileName={formattedDateTime} />
            {/* Export Exel */}
          </div>
      </div>
    );
};

export default UserTable;