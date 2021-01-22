import React from 'react';
import styles from './Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = (props) => {
  const { page, maxPage, handlePageChange } = props;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        onClick={() => handlePageChange(-1)}
        disabled={page === 1}
        aria-label="previous page"
      >
        <FontAwesomeIcon className={styles.icon} icon="arrow-circle-left" />
      </button>
      <p className={styles.page}>page : {page}</p>
      <button
        className={styles.btn}
        onClick={() => handlePageChange(1)}
        disabled={page >= maxPage}
        aria-label="next page"
      >
        <FontAwesomeIcon className="right-icon" icon="arrow-circle-right" />
      </button>
    </div>
  );
};

export default Pagination;
