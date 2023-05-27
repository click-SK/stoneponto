import React, {useState, useEffect} from 'react';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

const EditCurrentUserSecond = ({data, editPath, title, userId, setIsFetch}) => {
    const [editValue, setEditValue] = useState('');
    const [isEditValue, setIsEditValue] = useState(false);

    const handleEditButtonSave = () => {
        setIsEditValue((isEdit) => !isEdit);
    
        fetch(editPath, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId,
            value: editValue
          })
        })
          .then((res) => res.json())
          setTimeout(() => {
            // window.location.reload();
            setIsFetch(state => !state)
          },1000)
      };

    const handleEditButton = () => {
        setIsEditValue((state) => !state);
        setEditValue(data);
      };

    return (
        <div style={{padding: '20px 0px'}}>
            <div>
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <p>{title}: {data}</p>
            {isEditValue 
            ?
            <AiFillCloseCircle onClick={() => setIsEditValue((state) => !state)} style={{width:'auto', height:'30px'}}/>
            :
            <AiFillEdit onClick={handleEditButton} style={{width:'auto', height:'30px'}}/>}
            </div>
            {isEditValue && (
              <div>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleEditButtonSave}>Зберегти зміни</button>
              </div>
            )}
          </div>
        </div>
    );
};

export default EditCurrentUserSecond;