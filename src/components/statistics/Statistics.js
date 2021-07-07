import React from "react";
import PropTypes from "prop-types";
import style from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
  const groupedStats = uniqify(stats, 'label');

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {groupedStats.map(({ id, label, percentage }) => (
          <li className={style.item} key={id} style={{ backgroundColor: randomColor() }}>
            <span className={style.label}>{label}</span>
            <span className={style.label}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const random = () => Math.floor(255 * Math.random());

function randomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}

function uniqify (array, key) {
    const labels = [];
    const filtered = JSON.parse(JSON.stringify(array)).reduce((prev, curr) => {
      if (!labels.includes(curr[key])) {
        labels.push(curr[key]);
        prev.push(curr)
      } else {
        const indexOfLabel = prev.findIndex(item => item[key] === curr[key]);
        prev[indexOfLabel].percentage += curr.percentage;
      }
      return prev;
    }, []);
    return filtered;
}


export default Statistics;
