import React from "react";
import PropTypes from "prop-types";
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={style.transactionHistory}>
    <thead>
      <tr>
        <th className={style.head}>Type</th>
        <th className={style.head}>Amount</th>
        <th className={style.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
