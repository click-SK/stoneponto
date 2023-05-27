import React, {useState} from 'react';
import {AiOutlineDown, AiFillEdit} from 'react-icons/ai'
const EditCurrencyValue = ({data, setIsFetch}) => {
    const [isEdit, setIsEdit] = useState('');
    const [newvalue, setNewValue] = useState('');

    const handleEditButtonSave = () => {
        setIsEdit((state) => !state);
        setIsFetch((state) => !state);
    
        fetch('http://localhost:4444/upadte-currency', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            value: newvalue
          })
        })
        .then((res) => res.json())
        setTimeout(() => {
          setIsFetch(state => !state)
        },1000)
      };
    
      const handleEditButton = () => {
        setIsEdit((state) => !state);
        setNewValue(data);
      };

    return (
        <div>
        <div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>{data}</p>
              </div>
              <AiFillEdit onClick={handleEditButton} />
              {isEdit && (
                <div>
                  <input
                    value={newvalue}
                    onChange={(e) => setNewValue(e.target.value)}
                  />
                  <button onClick={handleEditButtonSave}>Save</button>
                </div>
              )}
            </div>
        </div>
      </div>
    );
};

export default EditCurrencyValue;