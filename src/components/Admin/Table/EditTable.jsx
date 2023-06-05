import React,{useState, useEffect} from 'react';
import DisplayAdminTableOrder from './DisplayAdminTableOrder'
import '../../../style/table.scss'
const EditTable = () => {
    const [currentOrders, setCurrentOrders] = useState([]);
    const [allOrders, setAllOrders] = useState([]);
    const [uniqueUsers, setUniqueUsers] = useState([]);
    const [uniqueStatuses, setUniqueStatuses] = useState([]);
    const [isFetch,setIsFetch] = useState(false);

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-table')
        .then((res) => res.json())
        .then((res) => {
            setCurrentOrders(res.reverse());
            setAllOrders(res.reverse());
        })
    },[isFetch])

    useEffect(() => {
    const usersArr = [...new Set(allOrders.map(item => item.user.name))];
    const statusArr = [...new Set(allOrders.map(item => item.status.name))];
    setUniqueUsers(usersArr);
    setUniqueStatuses(statusArr);
    },[allOrders, currentOrders])

      const filterOnUserFunc = (e) => {
        if(e == 'Всі') {
            setCurrentOrders(allOrders)
        } else {
            let newArr = allOrders.filter((item) => item.user.name == e);
            setCurrentOrders(newArr)
        }
      }

    const filterStatusFunc = (e) => {
        if(e == 'Всі') {
            setCurrentOrders(allOrders)
        } else {
            let newArr = allOrders.filter((item) => item.status.name == e);
            setCurrentOrders(newArr)
        }
      }

    const filterDateFunc = (e) => {
      let newArr = allOrders.filter((item) => item.date.substring(0, 10) == e);
      setCurrentOrders(newArr);
    }


    return (
      <div className='table_wrap'>
        <div
        className='table_header'
        >
          <div className='table_header_item table_header_id'>
            <p>Id</p>
          </div>
          <div className='table_header_item table_header_date'>
            <p>Дата</p>
            <input type='date'
            onChange={(e) => filterDateFunc(e.target.value)}/>
          </div>
          <div className='table_header_item table_header_name'>
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
          <div className='table_header_item table_header_file'>
            <p>Назва файлу</p>
          </div>
          <div className='table_header_item table_header_materials'>
            <p>Матеріал</p>
          </div>
          <div className='table_header_item table_header_quality'>
            <p>Якість</p>
          </div >
          <div className='table_header_item table_header_width'>
            <p>Ширина</p>
          </div>
          <div className='table_header_item table_header_hight'>
            <p>Висота</p>
          </div >
          <div className='table_header_item table_header_sum'>
            <p>Сумма</p>
          </div >
          <div className='table_header_item table_header_descript'>
            <p>Умова</p>
          </div>
          <div className='table_header_item table_header_status'>
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
        <div className='table_body'>
          {currentOrders.map((order) => (
            <DisplayAdminTableOrder
              key={order.id}
              order={order}
              setIsFetch={setIsFetch}
            />
          ))}
        </div>
      </div>
    );
};

export default EditTable;