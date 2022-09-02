import './ExpenseFilter.css';

import React from 'react';

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <section>
      <article>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </article>
    </section>
  );
};

export default ExpenseFilter;
