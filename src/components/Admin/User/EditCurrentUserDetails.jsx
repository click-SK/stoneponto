import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import {RiFileEditFill} from 'react-icons/ri';

const EditCurrentUserDetails = ({data, editPath, title, userId, setIsFetch}) => {
    const [editValue, setEditValue] = useState('');
    const [isEditValue, setIsEditValue] = useState(false);
    const { t } = useTranslation();

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
            <div className='details_wrap'>
              <div className='details_title'>
              <p>{t(`${title}`)}: {data}</p>
              {isEditValue && (
                <div className='details_input'>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={handleEditButtonSave}>{t(`Save changes`)}</button>
                </div>
              )}

              {isEditValue 
              ?
              <AiFillCloseCircle onClick={() => setIsEditValue((state) => !state)} />
              :
              <RiFileEditFill onClick={handleEditButton} />}
              </div>
              
          </div>
    );
};

export default EditCurrentUserDetails;