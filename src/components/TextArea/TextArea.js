import { useState } from "react";
import styles from "./styles.module.css";
import { firstColor, selectColor } from "../../redux/color/colorSlice"; //reducer import ettik colors kullanabilmek için.
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

function TextArea() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //ilk color'ımız
  const startColor = useSelector((state) => state.color.startColor);

  //colorSlice tüm renkleri çektik.
  const colors = useSelector((state) => state.color.colors);

  const handleAdd = () => {
    if (!text) return alert("Boş ekleme yapamazsınız!");
    dispatch(addNote({ text: text, color: startColor })); //color eklenince başlangıçta hangi renk content ve text olmalı onu belirliyoruz.
    setText("");
  };

  const handleColor = (code) => {
    dispatch(firstColor(code));
    dispatch(selectColor(code));
  };

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
              className={styles.color}
              style={{ backgroundColor: colorItem.code }}
              onClick={() => handleColor(colorItem.code)}
            >
              {colorItem.selected && <span>✔</span>}
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
