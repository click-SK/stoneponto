import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai';
import {RiFileEditFill} from 'react-icons/ri';

const EditCurrencyValue = ({data, setIsFetch}) => {
    const [isEdit, setIsEdit] = useState('');
    const [newvalue, setNewValue] = useState('');
    const { t } = useTranslation();

    const handleEditButtonSave = () => {
        setIsEdit((state) => !state);
        setIsFetch((state) => !state);
    
        fetch('http://91.206.30.132:4444/update-currency', {
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
                <p>{t(`Change course`)}:</p> 
              <div className='edit_plus_value'>
                <p>{data}</p>
              </div>
              {isEdit && (
                <div className='edit_plus_input'>
                  <input
                    value={newvalue}
                    onChange={(e) => setNewValue(e.target.value)}
                    
                  />
                  <button onClick={handleEditButtonSave}>{t(`Save changes`)}</button>
                </div>
              )}
        {!isEdit 
        ?
        <RiFileEditFill
        className={`goods_edit_icon ${isEdit? 'goods_edit_icon_active' : ''}`}
        onClick={handleEditButton}/>
        :
        <AiFillCloseCircle
        className={`goods_edit_icon ${isEdit? 'goods_edit_icon_active' : ''}`}
        onClick={handleEditButton}/>
        }
            </div>

    );
};

export default EditCurrencyValue;