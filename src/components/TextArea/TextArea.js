import { useState } from "react";
import styles from "./styles.module.css";
import { changeColor , selectColor} from "../../redux/color/colorSlice"; //reducer import ettik colors kullanabilmek için.
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function TextArea() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //başlangıçta hangi renkle ekleme yapacağımızı belirledik.
  const startColor =  useSelector(state => state.color.startColor)
  
  //renkleri tanımladığım colorslice'daki array'im. Div'de bunu map'liyorum. 
  const colors = useSelector((state) => state.color.colors);

  const handleAdd = () => {
    if (!text) return alert("Boş ekleme yapamazsınız!");
    dispatch(addNote({ text: text, id: nanoid(), color: startColor }));
    setText("");
  };

  const handleColor = (code) => {
    dispatch(changeColor(code)) //colorSlice'dan geliyor.
    dispatch(selectColor(code))
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
          {colors.map((colorItem) => (
            <button
              key={colorItem.id}
              value={colorItem.code}
              className={styles.color}
              style={{ backgroundColor: colorItem.code }}
              onClick={(e) => handleColor(e.target.value)}
            >
              { colorItem.selected ? "√" : ""} 
            </button>
          ))}
        </div>

        <div className={styles.addBtnDiv}>
          <button className={styles.ekleBtn} onClick={() => handleAdd()}>
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
