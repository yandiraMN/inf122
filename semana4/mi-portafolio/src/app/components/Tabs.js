import React from 'react';
import styles from './Tabs.module.css';

function Tabs() {
  return (
    <div className={styles.tabs}>
      <button className={`${styles.tabsBackgroundItemP} ${styles.active}`}>
        <p className={styles.tabsBackgroundItemText}>Portfolio</p>
      </button>
      <button className={styles.tabsBackgroundItem}>
        <p className={styles.tabsBackgroundItemText}>Skills</p>
      </button>
    </div>
  );
}
export default Tabs;
