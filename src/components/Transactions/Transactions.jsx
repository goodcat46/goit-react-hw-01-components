import React from 'react';
import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td className={css.col}>{type}</td>
      <td className={css.col}>{amount}</td>
      <td className={css.col}>{currency}</td>
    </tr>
  );
};

const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.thRow}>
          <th className={css.col}>Type</th>
          <th className={css.col}>Amount</th>
          <th className={css.col}>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction
          type={transactions[0].type}
          amount={transactions[0].amount}
          currency={transactions[0].currency}
        />
        {transactions.map(({ id, type, amount, currency }) => (
            <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
          ))}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};

export default Transactions;
