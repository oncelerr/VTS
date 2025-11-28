import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = ({ size = 'medium', color = '#1C2D80' }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div 
        className={styles.spinnerCircle}
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default Spinner;
