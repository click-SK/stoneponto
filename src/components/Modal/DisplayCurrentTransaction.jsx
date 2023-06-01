import React, { useEffect, useState } from "react";

const DisplayCurrentTransaction = ({ transaction }) => {
  const [withoutDot,setWithoutDot] = useState('');

  useEffect(() => {
    let trimmedString = transaction.historyValue.split(".")[0];
    setWithoutDot(trimmedString)
  },[])

  return (
    <div>
      <p>{transaction.action}</p>
      <p>{transaction.date}</p>
      <p>{withoutDot}</p>
    </div>
  );
};

export default DisplayCurrentTransaction;
