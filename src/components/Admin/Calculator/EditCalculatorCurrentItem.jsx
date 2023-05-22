import React, {useState} from 'react';
import {AiFillEdit} from 'react-icons/ai'
const EditCalculatorCurrentItem = ({item, mainId, editPath, setIsFetch, goodsIndex, currentItemIndex}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newPrice, setNewPrice] = useState(0);
    console.log('editPath',editPath);

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
            currentItemIndex,
            mainId
          })
        })
          .then((res) => res.json())
          setTimeout(() => {
            // window.location.reload();
            setIsFetch(state => !state)
          },1000)
      }

      const handleEditButton = () => {
        setIsEdit(state => !state);
        setNewPrice(item.price);
      };

    return (
        <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
        <AiFillEdit onClick={handleEditButton}/>
        {isEdit && 
        <div>
            <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
            <button onClick={handleEditButtonSave}>Save</button>
        </div>
        }
        </div>
    );
};

export default EditCalculatorCurrentItem;