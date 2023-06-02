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
          <div>
            <p>Id:</p>
          </div>
          <div>
            <p>Дата:</p>
            <input type='date'
            onChange={(e) => filterDateFunc(e.target.value)}/>
          </div>
          <div>
          <p>Користувач:</p>
          <select onChange={(e) => filterOnUserFunc(e.target.value)}>
            <option>Всі</option>
            {uniqueUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
          <div>
            <p>Назва файлу:</p>
          </div>
          <div>
            <p>Матеріал:</p>
          </div>
          <div>
            <p>Якість:</p>
          </div>
          <div>
            <p>Ширина:</p>
          </div>
          <div>
            <p>Висота:</p>
          </div>
          <div>
            <p>Сумма:</p>
          </div>
          <div>
            <p>Умова:</p>
          </div>
          <div>
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