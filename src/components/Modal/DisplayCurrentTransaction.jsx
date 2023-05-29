import React, { useEffect, useState } from "react";

const DisplayCurrentTransaction = ({ transaction }) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px 0px",
      }}
    >
      <p>{transaction.action}</p>
      <p>{transaction.date}</p>
      <p>{Number(transaction.historyValue).toFixed(0)}</p>
    </div>
  );
};

export default DisplayCurrentTransaction;
