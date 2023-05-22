import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const EditCalculatorAdditionalParameter = ({ title, data, editPath, setIsFetch, mainId, goodsIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newPrice, setNewPrice] = useState(0);

  const handleEditButtonSave = () => {
    setIsEdit((isEdit) => !isEdit);

    fetch(editPath, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: newPrice,
        goodsIndex,
        mainId
      })
    })
      .then((res) => res.json())
      setTimeout(() => {
        // window.location.reload();
        setIsFetch(state => !state)
      },1000)
  };

  const handleEditButton = () => {
    setIsEdit((state) => !state);
    setNewPrice(data);
  };

  return (
    <div>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() => setIsOpen((state) => !state)}
        >
          <p>{title}</p>
          <AiOutlineDown />
        </div>
        {isOpen && (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>{title}</p>
              <p>{data}</p>
            </div>
            <AiFillEdit onClick={handleEditButton} />
            {isEdit && (
              <div>
                <input
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <button onClick={handleEditButtonSave}>Save</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCalculatorAdditionalParameter;
