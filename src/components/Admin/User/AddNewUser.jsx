import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const AddNewUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const { t } = useTranslation();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Невірний формат електронної адреси");
      return;
    }

    const response = await fetch("http://91.206.30.132:4444/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    const data = await response.json();

    if (data) {
      setEmail("");
      setPassword("");
      setName("");
      alert("Користувача успішно створено");
    }
  };

  return (
    <div className="login_wrap">
      <div className="login_block">
        <div className="input_wrap">
          <p>{t(`Name`)} агент.</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(`Name`)}
          />
        </div>
        <div className="input_wrap">
          <p>{t(`Mail`)}</p>
          <input
            type="text"
            className={
              emailError == "Невірний формат електронної адреси"
                ? "error_email"
                : ""
            }
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            placeholder={t(`Mail`)}
          />
          <p
            className={`error_massage_none ${
              emailError == "Невірний формат електронної адреси"
                ? "error_massage"
                : ""
            }`}
          >
            {t(`Wrong email address format`)}
          </p>
        </div>
        <div className="input_wrap">
          <p>{t(`Password`)}</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t(`Password`)}
          />
        </div>
        <div className="login_button_wrap">
          <button className="login_button" onClick={handleSubmit}>
            {t(`Register`)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
