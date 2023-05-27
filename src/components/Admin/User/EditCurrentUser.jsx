import React, {useState, useEffect} from 'react';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import EditCurrentUserSecond from './EditCurrentUserSecond';
import EditBalance from './EditBalance';
const EditCurrentUser = ({user, setIsFetch}) => {

    return (
        <div style={{padding: '20px 0px'}}>
            <EditCurrentUserSecond 
            data={user.name}
            userId={user._id}
            editPath={'http://localhost:4444/update-name'}
            title='Імя'
            setIsFetch={setIsFetch}/>

            <EditCurrentUserSecond 
            data={user.discountValue}
            userId={user._id}
            editPath={'http://localhost:4444/update-discount'}
            title='Знижка'
            setIsFetch={setIsFetch}/>

            <EditCurrentUserSecond 
            data={user.email}
            userId={user._id}
            editPath={''}
            title='Пошта'
            setIsFetch={setIsFetch}/>

             <EditBalance 
            data={user.balance}
            userId={user._id}
            editPath={'http://localhost:4444/update-balance'}
            title='Баланс'
            setIsFetch={setIsFetch}/>
        </div>
    );
};

export default EditCurrentUser;