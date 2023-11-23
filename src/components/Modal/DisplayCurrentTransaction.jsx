import React, { useEffect, useState } from "react";

const DisplayCurrentTransaction = ({ transaction }) => {
  const [withoutDot,setWithoutDot] = useState('');
  const transactionSum = withoutDot.startsWith('-') ? 'withdrawal' : 'deposit';

  useEffect(() => {
    let trimmedString = transaction.historyValue.split(".")[0];
    setWithoutDot(trimmedString)
  },[])

  return (
      <div className="history_item">
        <p>{transaction.date}</p>
        <p>{transaction.action}</p>
        <p className={transactionSum}>{withoutDot}</p>
        <p className="deposit">{transaction?.balance}</p>
        <p className="withdrawal">{transaction?.debt}</p>
      </div>
  );
};

export default DisplayCurrentTransaction;
