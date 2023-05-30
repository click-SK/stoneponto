// import React,{useState, useEffect} from 'react';
// import DisplayAdminTableOrder from './DisplayAdminTableOrder'
// const EditTable = () => {
//     const [currentOrders, setCurrentOrders] = useState([]);
//     const [allOrders, setAllOrders] = useState([]);
//     const [isFetch,setIsFetch] = useState(false);

//     useEffect(() => {
//         fetch('https://ponto-print.herokuapp.com/get-all-table')
//         .then((res) => res.json())
//         .then((res) => {
//             setCurrentOrders(res.reverse());
//             setAllOrders(res.reverse());
//         })
//     },[isFetch])

//       const filterOnUserFunc = (e) => {
//         if(e == 'Всі') {
//             setCurrentOrders(allOrders)
//         } else {
//             let newArr = allOrders.filter((item) => item.user.name == e);
//             setCurrentOrders(newArr)
//         }
//       }

//     const filterStatusFunc = (e) => {
//         if(e == 'Всі') {
//             setCurrentOrders(allOrders)
//         } else {
//             let newArr = allOrders.filter((item) => item.status.currentStatus == e);
//             setCurrentOrders(newArr)
//         }
//       }

//     return (
//       <div>
//         <div
//           style={{
//             borderBottom: "1px solid black",
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           <div>
//             <p>Id:</p>
//           </div>
//           <div>
//             <p>Дата:</p>
//           </div>
//           <div>
//             <p>Користувач:</p>
//             <select onChange={(e) => filterOnUserFunc(e.target.value)}>
//               <option>Всі</option>
//               {allOrders.map((item) => (
//                 <option key={item._id} value={item.user.name}>
//                   {item.user.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <p>Назва файлу:</p>
//           </div>
//           <div>
//             <p>Матеріал:</p>
//           </div>
//           <div>
//             <p>Якість:</p>
//           </div>
//           <div>
//             <p>Ширина:</p>
//           </div>
//           <div>
//             <p>Висота:</p>
//           </div>
//           <div>
//             <p>Сумма:</p>
//           </div>
//           <div>
//             <p>Умова:</p>
//           </div>
//           <div>
//             <p>Статус:</p>
//             <select onChange={(e) => filterStatusFunc(e.target.value)}>
//               <option>Всі</option>
//               {allOrders.map((item) => (
//                 <option key={item._id} value={item.status.currentStatus}>
//                   {item.status.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         {currentOrders.map((order) => (
//           <DisplayAdminTableOrder
//             key={order.id}
//             order={order}
//             setIsFetch={setIsFetch}
//           />
//         ))}
//       </div>
//     );
// };

// export default EditTable;


import React,{useState, useEffect} from 'react';
import DisplayAdminTableOrder from './DisplayAdminTableOrder'
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

    return (
      <div>
        <div
          style={{
            borderBottom: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p>Id:</p>
          </div>
          <div>
            <p>Дата:</p>
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
        {currentOrders.map((order) => (
          <DisplayAdminTableOrder
            key={order.id}
            order={order}
            setIsFetch={setIsFetch}
          />
        ))}
      </div>
    );
};

export default EditTable;