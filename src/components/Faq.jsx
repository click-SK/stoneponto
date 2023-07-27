import React from 'react';
import { useTranslation } from "react-i18next";

const Faq = () => {
      const { t } = useTranslation();
    return (
        <div className="faq">
          <h2>{t(`Questions and answers`)}</h2>
          <ul>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 1`)}</h3>
              <p>{t(`Answer 1`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 2`)}</h3>
              <p>{t(`Answer 2`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 3`)}</h3>
              <p>{t(`Answer 3`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 4`)}</h3>
              <p>{t(`Answer 4`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 5`)}</h3>
              <p>{t(`Answer 5`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 6`)}</h3>
              <p>{t(`Answer 6`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 7`)}</h3>
              <p>{t(`Answer 7`)}</p>
            </li>
          </ul>
        </div>
    );
};

export default Faq;