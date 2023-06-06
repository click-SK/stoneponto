import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
const DisabledUser =  ({user, editPath, setIsFetch, title}) => {
    const [isEditValue, setIsEditValue] = useState(false);
    const [statusDisabled,setStatusDisabled] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setStatusDisabled(user.disabled)
    },[user])

    const handleEditButtonSave = () => {
    
        fetch(editPath, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: user._id,
            value: !statusDisabled
          })
        })
          .then((res) => res.json())
          setTimeout(() => {
            // window.location.reload();
            setIsFetch(state => !state)
          },1000)
      };

      
    return (
      
        <div className='details_wrap'>
          <div className='details_title'>
            <p>{t(`${title}`)}</p>
            <input
            className='input_checkbox'
            type='checkbox'
            checked={statusDisabled}
            onChange={handleEditButtonSave}/>
          </div>
        </div>
    );
};

export default DisabledUser;