import React, { useState, useEffect, useRef } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
const ChoseAddressSelect = ({ allAddress, currentUser, handleCangeInput }) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [choseValue, setChoseValue] = useState("");
  const [stateAllAddress, setStateAllAddress] = useState([]);

  useEffect(() => {
    setStateAllAddress(allAddress);
  }, [currentUser]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const choseItemFunc = (item) => {
    setIsOpen(false);
    handleCangeInput(item);
    setChoseValue(item);
  };

  const handleRemoveDeliveryText = (idx, item) => {
    fetch("http://91.206.30.132:4444/remove-user-address", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUser._id,
        addressIndex: idx,
      }),
    });
    setTimeout(() => {
      setStateAllAddress((address) => {
        return address.filter((stateAllAddress) => stateAllAddress != item);
      });
    }, 400);
  };

  return (
    <>
      <div
        className="custom-select select_address"
        onClick={() => setIsOpen(!isOpen)}
        ref={selectRef}
      >
        {stateAllAddress.length != 0 && (choseValue || stateAllAddress[0])}
        {isOpen && (
          <div className="options">
            {stateAllAddress.length != 0 &&
              stateAllAddress.map((item, idx) => (
                <div key={idx} className="select_address_item_wrap">
                  <p
                    className="select_address_item_text"
                    onClick={() => choseItemFunc(item)}
                  >
                    {item}
                  </p>
                  <MdOutlineDeleteForever
                    className="select_address_delete_icon"
                    onClick={() => handleRemoveDeliveryText(idx, item)}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChoseAddressSelect;
