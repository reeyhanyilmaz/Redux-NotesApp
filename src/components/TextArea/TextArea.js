import {useState} from "react";
import styles from "./styles.module.css";
import {changeColor } from '../../redux/color/colorSlice'; //reducer import ettik colors kullanabilmek için.
import { useSelector, useDispatch} from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid} from "@reduxjs/toolkit";


function TextArea() {  

  const [text , setText] = useState("");
  const dispatch = useDispatch();

  const changeColor = useSelector(state => state.color.colors); 

  const handleAdd = () => {
    dispatch(addNote({text: text, id: nanoid()}))
    setText("");
  }
  
  return (
    <div className={styles.TextAreaDiv}>
      <textarea
        value={text} 
        cols="30"
        rows="10"
        placeholder="Not giriniz..."
        className={styles.TextArea}
        onChange={(e) => setText(e.target.value)}
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
          <button className={styles.ekleBtn} onClick = {() => handleAdd()}>Ekle</button>
        </div>

        </div>
    </div>
  );
}

export default TextArea;
