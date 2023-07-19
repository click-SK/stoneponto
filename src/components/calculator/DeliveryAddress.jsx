import React, { useState, useEffect } from "react";
import { MdDoneOutline, MdOutlineDeleteForever } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "../../style/deliveryAddress.scss";
const DeliveryAddress = ({
  handleCangeInput,
  value,
  type,
  placeholder,
  title,
  disabled,
  currentUser,
}) => {
  const { t } = useTranslation();
  const [currentAddress, setCurrentAddress] = useState("");
  const [isSaveAddress, setIsSaveAddress] = useState(false);
  const [isDeleteAddress, setIsDeleteAddress] = useState(false);

  useEffect(() => {
    handleCangeInput(currentUser?.address);
    setCurrentAddress(currentUser?.address);
  }, [currentUser]);

  const handleCleanDeliveryText = () => {
    handleCangeInput("");
    setIsDeleteAddress(true);
    setTimeout(() => {
      setIsDeleteAddress(false);
    }, 2000);
  };

  const handleSaveDeliveryText = () => {
    setIsSaveAddress(true);
    fetch("http://91.206.30.132:4444/update-user-address", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUser._id,
        newValue: value,
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setCurrentAddress(value);
      setIsSaveAddress(false);
    }, 2000);
  };

  console.log("delivery user", currentUser);

  return (
    <div className="delivery_address_wrap">
      <div className="input input_delivery">
        <h3>{t(`${title}`)}</h3>
        <input
          type={type}
          placeholder={t(`${placeholder}`)}
          value={value}
          disabled={disabled}
          onChange={(e) => handleCangeInput(e.target.value)}
        />
      </div>
      <div className="delivery_button_wrap">
        {value == currentAddress ? (
          <>
            <button
              style={{
                padding: "5px 8px",
                background: "red",
                width: "100%",
                height: "100%",
              }}
              className="delivery_button"
              onClick={handleCleanDeliveryText}
            >
              <MdOutlineDeleteForever className="delivery_icon" />
            </button>
            <div>{isDeleteAddress && <p>Видалено</p>}</div>
          </>
        ) : (
          <>
            <button
              style={{
                padding: "5px 8px",
                background: "#5aad5a",
                width: "100%",
                height: "100%",
              }}
              className="delivery_button"
              onClick={handleSaveDeliveryText}
            >
              <MdDoneOutline className="delivery_icon" />
            </button>
            <div>{isSaveAddress && <p>Збережено</p>}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeliveryAddress;
