import React, { useState, useEffect } from 'react';
import DisplayAdminTableOrder from './DisplayAdminTableOrder';
import '../../../style/table.scss';

const EditTable = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const [uniqueStatuses, setUniqueStatuses] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalBalance, setTotalBalance] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    fetch('https://ponto-print.herokuapp.com/get-all-table')
      .then((res) => res.json())
      .then((res) => {
        setCurrentOrders(res.reverse());
        setAllOrders(res.reverse());
      });
  }, [isFetch]);

  useEffect(() => {
    if (allOrders.length !== 0) {
      let totalSum = 0;
      allOrders.forEach((item) => {
        totalSum = item.balans + totalSum;
      });
      setTotalBalance(totalSum.toFixed(0));
    }
  }, [allOrders]);

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

  useEffect(() => {
    const usersArr = [...new Set(allOrders.map((item) => item.user.name))];
    const statusArr = [...new Set(allOrders.map((item) => item.status.name))];
    setUniqueUsers(usersArr);
    setUniqueStatuses(statusArr);
  }, [allOrders, currentOrders]);

  const filterOnUserFunc = (e) => {
    if (e === 'Всі') {
      setCurrentOrders(allOrders);
    } else {
      let newArr = allOrders.filter((item) => item.user.name === e);
      setCurrentOrders(newArr);
    }
  };

  const filterStatusFunc = (e) => {
    if (e === 'Всі') {
      setCurrentOrders(allOrders);
    } else {
      let newArr = allOrders.filter((item) => item.status.name === e);
      setCurrentOrders(newArr);
    }
  };

  const filterDateFunc = (e) => {
    let newArr = allOrders.filter((item) => item.date.substring(0, 10) === e);
    setCurrentOrders(newArr);
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

console.log('currentPage',currentPage);

  return (
    <div className="table_wrap">
      <div className="table_header">
        <div className="table_header_item table_header_id">
          <p>Id</p>
        </div>
        <div className="table_header_item table_header_date">
          <p>Дата</p>
          <input type="date" onChange={(e) => filterDateFunc(e.target.value)} />
        </div>
        <div className="table_header_item table_header_name">
          <p>Користувач</p>
          <select onChange={(e) => filterOnUserFunc(e.target.value)}>
            <option>Всі</option>
            {uniqueUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="table_header_item table_header_file">
          <p>Назва файлу</p>
        </div>
        <div className="table_header_item table_header_materials">
          <p>Матеріал</p>
        </div>
        <div className="table_header_item table_header_quality">
          <p>Якість</p>
        </div>
        <div className="table_header_item table_header_width">
          <p>Ширина</p>
        </div>
        <div className="table_header_item table_header_hight">
          <p>Висота</p>
        </div>
        <div className="table_header_item table_header_sum">
          <p>Сумма</p>
        </div>
        <div className="table_header_item table_header_descript">
          <p>Умова</p>
        </div>
        <div className="table_header_item table_header_status">
          <p>Статус:</p>
          <select onChange={(e) => filterStatusFunc(e.target.value)}>
            <option>Всі</option>
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="table_body">
        {currentItems.map((order) => (
          <DisplayAdminTableOrder key={order.id} order={order} setIsFetch={setIsFetch} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {renderPageNumbers()}
      </div>
      <div className="pagination">
        <button className="btn" onClick={handlePrev} disabled={currentPage === 1}>
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
    </div>
  );
};

export default EditTable;