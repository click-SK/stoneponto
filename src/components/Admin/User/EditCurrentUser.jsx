import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import EditCurrentUserDetails from "./EditCurrentUserDetails";
import DisplayCurrentTransaction from "../../Modal/DisplayCurrentTransaction";
import EditBalance from "./EditBalance";
import EditUserPassword from "./EditUserPassword";
import DisabledUser from "./DisabledUser";
import EditDiscount from "./EditDiscount";
import Modal from "../../Modal/Modal";

const EditCurrentUser = ({ user, setIsFetch, setIsVisibleEdit, debt }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [historyPaymant, setHistoryPaymant] = useState([]);

  useEffect(() => {
    setHistoryPaymant(user.balanceHistory.reverse());
  }, [user]);

  const { t } = useTranslation();

  const itemsPerPage = 20;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historyPaymant.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(historyPaymant.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const chosePage = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    console.log("work");
    if (currentPage < pageNumbers.length) {
      console.log("work!!!");
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log("currentPage", currentPage);

  const renderPageNumbers = () => {
    let renderedPages = [];

    if (pageNumbers.length <= 5) {
      renderedPages = pageNumbers;
    } else {
      if (currentPage === 2) {
        renderedPages = [1, currentPage, currentPage + 1, pageNumbers.length];
      } else if (currentPage <= 3) {
        renderedPages = [...pageNumbers.slice(0, 4), pageNumbers.length];
      } else if (currentPage >= pageNumbers.length - 2) {
        renderedPages = [1, ...pageNumbers.slice(pageNumbers.length - 4)];
      } else {
        renderedPages = [
          1,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          pageNumbers.length,
        ];
      }
    }

    return renderedPages.map((page) => {
      if (page === "...") {
        return <p key={page}>{page}</p>;
      } else {
        return (
          <p
            style={{ padding: "0px 10px", fontSize: "18px", cursor: "pointer" }}
            key={page}
            onClick={() => chosePage(page)}
            className={`${page == currentPage ? "bold" : ""}`}
          >
            {page}
          </p>
        );
      }
    });
  };
  console.log("currentItems", currentItems);

  return (
    <div className="edit_user_item_wrap">
      <div className="edit_user_data">
        <button
          className="close_user"
          onClick={() => setIsVisibleEdit((state) => !state)}
        >
          Х
        </button>
        <div className="data_item user_info_edit">
          <EditCurrentUserDetails
            data={user.name}
            userId={user._id}
            editPath={"http://91.206.30.132:4444/update-name"}
            title={t(`Name`)}
            setIsFetch={setIsFetch}
          />
          <EditCurrentUserDetails
            data={user.email}
            userId={user._id}
            editPath={""}
            title={t(`Mail`)}
            setIsFetch={setIsFetch}
          />
          <EditUserPassword
            userId={user._id}
            editPath={"http://91.206.30.132:4444/update-password"}
            title={t(`Password change`)}
            setIsFetch={setIsFetch}
          />
        </div>
        <div className="data_item user_info_balance">
          <EditBalance
            data={user.balance.toFixed(0)}
            userId={user._id}
            editPath={"http://91.206.30.132:4444/update-balance"}
            title={t(`Balance`)}
            setIsFetch={setIsFetch}
            debt={debt}
          />
          <EditDiscount
            data={user.discountValue}
            userId={user._id}
            editPath={"http://91.206.30.132:4444/update-discount"}
            title={t(`Discount`)}
            setIsFetch={setIsFetch}
          />
          <DisabledUser
            user={user}
            title={t(`Block user`)}
            editPath={"http://91.206.30.132:4444/update-user-status"}
            setIsFetch={setIsFetch}
          />
        </div>
      </div>

      <div className="history_wrap">
        <div className="history_wrap_header">
          <p>{t(`Date`)}</p>
          <p>{t(`Operation`)}</p>
          <p>{t(`Sum`)}</p>
        </div>
        <div className="history_wrap_item">
          {currentItems.map((transaction) => (
            <DisplayCurrentTransaction
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderPageNumbers()}
        </div>
        <div className="pagination">
          <button
            className="btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <img src="/img/left-pagination.svg" alt="Previous" />
          </button>
          <button
            className="btn"
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            <img src="/img/right-pagination.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCurrentUser;
