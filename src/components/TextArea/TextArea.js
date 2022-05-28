import React from "react";
import styles from "./styles.module.css";
import {changeColor} from '../../redux/color/colorSlice'; //reducer import ettik colors kullanabilmek için.
import { useSelector} from "react-redux";

function TextArea() {  

  const changeColor = useSelector(state => state.color.colors); 
  
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
          {changeColor.map(color => (
            <button
              key={color.id}
              className={styles.color}
              style={{ backgroundColor: color.code }}
            ></button>
          ))}
        </div>
      

        <div className={styles.addBtnDiv}>
          <button className={styles.ekleBtn}>Ekle</button>
        </div>

        </div>
    </div>
  );
}

export default TextArea;
