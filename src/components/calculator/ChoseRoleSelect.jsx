import React, { useState, useEffect, useRef } from 'react';

const ChoseRoleSelect = ({ user, setIsOpenAllusers, allUsers, currentUserState, isOpenAllusers, setCurrentIdFunc }) => {
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

  // Функція для порівняння імен користувачів
  function compareNames(a, b) {
    if (a.name === 'ponto-print@ukr.net') {
      return -1; // Перший вибраний елемент - Admin
    }
    if (b.name === 'ponto-print@ukr.net') {
      return 1; // Другий вибраний елемент - Admin
    }
    return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
  }

  const choseItemFunc = (item, e) => {
    setCurrentIdFunc(item);
    setIsOpen(false);
  };

  // Сортуємо масив користувачів за алфавітом
  allUsers.sort(compareNames);

  return (
    <>
      {user && user?.isAdmin && (
        <div
          className="custom-select select_user"
          onClick={() => setIsOpen(!isOpen)}
          ref={selectRef}
        >
          {allUsers.length !== 0 && ((currentUserState === 'ponto-print@ukr.net' ? 'Admin' : currentUserState) || (allUsers[0].name === 'ponto-print@ukr.net' && 'Admin'))}
          {isOpen && (
            <div className="options">
              {allUsers.length !== 0 &&
                allUsers.map((item) => (
                  <p onClick={() => choseItemFunc(item)} key={item._id}>
                    {item.name === 'ponto-print@ukr.net' ? 'Admin' : item.name}
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
