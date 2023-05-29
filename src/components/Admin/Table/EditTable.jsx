import React,{useState, useEffect} from 'react';
import DisplayAdminTableOrder from './DisplayAdminTableOrder'
const EditTable = () => {
    const [currentOrders, setCurrentOrders] = useState([]);
    const [allOrders, setAllOrders] = useState([]);
    const [isFetch,setIsFetch] = useState(false);
    const [searchState,setSearchState] = useState('');
    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-table')
        .then((res) => res.json())
        .then((res) => {
            setCurrentOrders(res);
            setAllOrders(res.reverse());
        })
    },[isFetch])

    const allOrdersFunc = () => {
        setCurrentOrders(allOrders)
      };


    const newOrdersFunc = () => {
        let newArr = allOrders.filter((item) => item.status.currentStatus === 'new');
        setCurrentOrders(newArr)
      };

    const workOrdersFunc = () => {
        let newArr = allOrders.filter((item) => item.status.currentStatus === 'download');
        setCurrentOrders(newArr)
      };

    const finishedOrdersFunc = () => {
        let newArr = allOrders.filter((item) => item.status.currentStatus === 'finished');
        setCurrentOrders(newArr)
      };

    const deleteOrdersFunc = () => {
        let newArr = allOrders.filter((item) => item.status.currentStatus === 'delete');
        setCurrentOrders(newArr)
      };

      const searchFunc = (e) => {
        let array = allOrders.filter((item) => {
          return item.user.name.toLowerCase().includes(e.toLowerCase());
        });
        setCurrentOrders(array);
        console.log('array', array);
      };

    return (
        <div>
        <div style={{borderBottom: '1px solid black', display:'flex',justifyContent:'space-around'}}>
            <div>
                <p>Id:</p>
            </div>
            <div>
                <p>Дата:</p>
            </div>
            <div>
                <p>Користувач:</p>
                <input 
                placeholder='Пошук'

                onChange={(e) => searchFunc(e.target.value)}
                />
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
                <div>
                    <p onClick={allOrdersFunc}>Всі</p>
                    <p onClick={newOrdersFunc}>Нові</p>
                    <p onClick={workOrdersFunc}>В роботі</p>
                    <p onClick={finishedOrdersFunc}>Виконані</p>
                    <p onClick={deleteOrdersFunc}>Видалені</p>
                </div>
            </div>
        </div>
            {currentOrders.map((order) => (
                <DisplayAdminTableOrder key={order.id}
                order={order}
                setIsFetch={setIsFetch}/>
            ))}
        </div>
    );
};

export default EditTable;