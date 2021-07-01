import React from "react";
import PropTypes from "prop-types";


// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов. 
// Постараться убрать повторения в масссиве с одинаковым типом и сможить их значения
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.



const Statistics = ({title, stats}) =>
  <section className="statistics">
    {title && <h2 className="title">{title}</h2> }
    <ul className="stat-list">
      {stats.map(({id, label, percentage }) => 
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage} %</span>
      </li>
      )}
    </ul>
  </section >
  ;


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
    
  }
    
export default Statistics;