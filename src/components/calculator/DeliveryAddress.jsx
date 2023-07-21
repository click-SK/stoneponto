import React, { useState, useEffect } from "react";
import { MdDoneOutline, MdOutlineDeleteForever } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "../../style/deliveryAddress.scss";
import ChoseAddressSelect from "./ChoseAddressSelect";
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
  const [isSaveAddress, setIsSaveAddress] = useState(false);

  useEffect(() => {}, [currentUser]);

  const handleSaveDeliveryText = () => {
    setIsSaveAddress(true);
    fetch("http://91.206.30.132:4444/add-user-address", {
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
      setIsSaveAddress(false);
    }, 2000);
  };

  return (
    <div style={{ width: "100%" }}>
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
              {t("Save the address")}
            </button>
            <div>{isSaveAddress && <p>{t("Saved")}</p>}</div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
