import React from 'react';
import styles from './ErrorDisplayer.module.css';
import ink from '../../img/ink.jpg';

const ErrorDisplayer = (props) => {
  const { status = '404', msg = 'not found' } = props;

  return (
    <section className={styles.errorDisplayer}>
      <p>Oops.... something went wrong</p>
      <p>status code: {status}</p>
      <p>{msg}</p>
      <img className={styles.img} src={ink} alt="spilled ink" />
    </section>
  );
};

export default ErrorDisplayer;
