import React from 'react';
import PropTypes from 'prop-types';
import css from './stats.module.css';

const StatsItem = ({ title, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{title}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsEl = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(el => (
          <StatsItem key={el.id} title={el.label} percentage={el.percentage} />
        ))}
      </ul>
    </section>
  );
};

StatsItem.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
};
StatsEl.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default StatsEl;
