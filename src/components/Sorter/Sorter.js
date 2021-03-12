import React from 'react';
import styles from './Sorter.module.css';

const Sorter = ({ sort_by, order, setSort_by, setOrder }) => {
  return (
    <form className={styles.form}>
      <p className={styles.formLabel}>Sorted By:</p>
      <label className={styles.label} htmlFor="sort_by" aria-label="sort_by">
        <div className={styles.selectContainer}>
          <select
            className={styles.selector}
            value={sort_by}
            name="sort_by"
            id="sort_by"
            onChange={setSort_by}
          >
            <option value="comment_count">Comments</option>
            <option value="created_at">Date</option>
            <option value="votes">Likes</option>
          </select>
        </div>
      </label>

      <label className={styles.label} htmlFor="order" aria-label="order">
        <div className={styles.selectContainer}>
          <select
            className={styles.selector}
            value={order}
            name="order"
            id="order"
            onChange={setOrder}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </label>
    </form>
  );
};

export default Sorter;
