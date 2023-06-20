import React, { useState, useEffect, useRef } from 'react';
const ChoseRoleSelect = ({user,setIsOpenAllusers,allUsers,currentUserState,isOpenAllusers,setCurrentIdFunc}) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      console.log('event admin',event);
      setIsOpen(false);
    }
  };

  const choseItemFunc = (user) => {
    setCurrentIdFunc(user);
    setIsOpen(false);
  }

  return (
    <>
      {user && user?.isAdmin && (
        <div
          className="custom-select select_user"
          onClick={() => setIsOpenAllusers((state) => !state)}
          ref={selectRef}
        >
          {allUsers.length != 0 && (currentUserState || allUsers[0].name)}
          {isOpenAllusers && (
            <div className="options">
              {allUsers.length != 0 &&
                allUsers.map((user) => (
                  <p onClick={() => choseItemFunc(user)} key={user._id}>
                    {user.name}
                  </p>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChoseRoleSelect;
