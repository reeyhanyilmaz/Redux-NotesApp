import React from "react";
import styles from "./styles.module.css";

function TextArea() {  
  return (
    <div className={styles.TextAreaDiv}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Not giriniz..."
        className={styles.TextArea}
      ></textarea>

      <div className={styles.colorAndBtn}>
        <div className={styles.colorDiv}>
          <figure ></figure>
        </div>

        <div className={styles.addBtnDiv}>
          <button className={styles.ekleBtn}>Ekle</button>
        </div>

      </div>
    </div>
  );
}

export default TextArea;
