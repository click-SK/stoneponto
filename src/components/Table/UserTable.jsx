import React, {useState, useEffect} from 'react';
import { fetchAuthMe } from '../../store/auth';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DisplayUserTableOrder from './DisplayUserTableOrder';
import socket from '../../socket/socket'
import '../../style/userProfile.scss'
import '../../style/table.scss'
const UserTable = ({allOrders, currentUser}) => {
  const dispatch = useDispatch();
  
  console.log('currentUser',currentUser);
useEffect(() => {
  console.log('work');
  socket.on('new table',({user}) => {
    console.log('new table1',user);
    if(currentUser._id == user) {
      dispatch(fetchAuthMe());
    }
  });
  socket.on('update table',({user}) => {
    console.log('update table1',user);
    if(currentUser._id == user) {
      dispatch(fetchAuthMe());
    }
  });
}, []);

  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalBalance, setTotalBalance] = useState(0);
  const itemsPerPage = 20;

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
  


    return (
        <div className='table_wrap'>
        <div  className='table_header'>
            <div className='table_header_item table_header_id'>
                <p>Id:</p>
            </div>
            <div className='table_header_item table_header_date'>
                <p>{t(`Date`)}:</p>
            </div>
            <div className='table_header_item table_header_file'>
                <p>{t(`The name of the file`)}:</p>
            </div>
            <div className='table_header_item table_header_materials'>
            <p>{t(`Material`)}</p>
          </div>
          <div className='table_header_item table_header_quality'>
            <p>{t(`Quality`)}</p>
          </div >
          <div className='table_header_item table_header_width'>
            <p>{t(`Width`)}</p>
          </div>
          <div className='table_header_item table_header_hight'>
            <p>{t(`Height`)}</p>
          </div >
          <div className='table_header_item table_header_sum'>
            <p>{t(`Sum`)}</p>
          </div >
          <div className='table_header_item table_header_descript'>
            <p>{t(`Condition`)}</p>
          </div>
            <div className='table_header_item table_header_status'>
                <p>{t(`Status`)}:</p>
            </div>
        </div>
            <div className='table_body'>
                {currentItems.map((order) => (
                    <DisplayUserTableOrder key={order.id}
                    order={order}
                    currentUser={currentUser}/>
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

export default UserTable;