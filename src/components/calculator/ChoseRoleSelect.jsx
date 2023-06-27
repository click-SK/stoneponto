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
      setIsOpen(false);
    }
  };

  const choseItemFunc = (iten,e) => {
    setCurrentIdFunc(iten);
    setIsOpen(false);
  }

  return (
    <>
      {user && user?.isAdmin && (
        <div
          className="custom-select select_user"
          onClick={() => setIsOpen(!isOpen)}
          ref={selectRef}
        >
          {allUsers.length != 0 && (currentUserState || allUsers[0].name)}
          {isOpen && (
            <div className="options">
              {allUsers.length != 0 &&
                allUsers.map((iten) => (
                  <p onClick={() => choseItemFunc(iten)} key={iten._id}>
                    {iten.name}
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
