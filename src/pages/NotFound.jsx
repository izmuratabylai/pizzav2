import React from "react";
import styles from '../scss/components/notFound.module.scss'



export const NotFound = () => {
  return (
    <div >
          <h1 className={styles.root}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
    </div>
  );
};
