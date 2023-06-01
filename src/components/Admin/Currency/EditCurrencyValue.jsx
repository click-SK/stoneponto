import React, {useState} from 'react';
import {AiOutlineDown, AiFillEdit} from 'react-icons/ai'
import {RiFileEditFill} from 'react-icons/ri';

const EditCurrencyValue = ({data, setIsFetch}) => {
    const [isEdit, setIsEdit] = useState('');
    const [newvalue, setNewValue] = useState('');

    const handleEditButtonSave = () => {
        setIsEdit((state) => !state);
        setIsFetch((state) => !state);
    
        fetch('https://ponto-print.herokuapp.com/upadte-currency', {
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

            <div className='edit_plus_wrap'>
                <p>Змінити курс</p> 
              <div className='edit_plus_value'>
                <p>{data}</p>
              </div>
              <RiFileEditFill onClick={handleEditButton} />
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

    );
};

export default EditCurrencyValue;