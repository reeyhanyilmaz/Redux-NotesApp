import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { firstColor, selectColor } from "../../redux/color/colorSlice"; //reducer import ettik colors kullanabilmek için.
import { useSelector, useDispatch } from "react-redux";
import { addNote, update, saveEditedNote } from "../../redux/notes/notesSlice";

function TextArea() {
  const edit = useSelector((state) => state.notes.edit);
  console.log("edit", edit);
  
  const dispatch = useDispatch();

  //ilk color'ımız
  const startColor = useSelector((state) => state.color.startColor);

  //colorSlice tüm renkleri çektik.
  const colors = useSelector((state) => state.color.colors);

  const [text, setText] = useState(""); //notes'lar buraya ekleniyor.
  const [updateText, setUpdateText] = useState(edit.text);  //edit yapmak için state'imiz.

  useEffect(() => {
    setUpdateText(edit.text);
  }, [edit]);

  //ekleme yaptığımız func.
  const handleAdd = (e) => {
    e.preventDefault(); //ekleme yapınca (submit) sayfa yenilenmesini engellemek için.
    if (!text) return alert("Boş ekleme yapamazsınız!");
    dispatch(addNote({ text: text, color: startColor })); //color eklenince başlangıçta hangi renk content ve text olmalı onu belirliyoruz.
    setText("");
  };

  //edit yapılmasını sağlayan func.
  const handleSaveEditedNoteButton = () => {
    dispatch(
      saveEditedNote({
        id: edit.id,
        text: updateText,
        // lastEditedNote: lastEditedNote,
        colors,
      })
    );
    setText("");
    setUpdateText("");
  };

  //background rengi için func.
  const handleColor = (code) => {
    dispatch(firstColor(code));
    dispatch(selectColor(code));
  };

  return (
    <div className={styles.TextAreaDiv}>
      <textarea
        value={edit.id ? updateText : text}
        cols="30"
        rows="10"
        placeholder="Not giriniz..."
        className={styles.TextArea}
        // onChange={(e) => setText(e.target.value)}
        onChange={
          edit.id ? (e) => setUpdateText(e.target.value) : (e) => setText(e.target.value)      
      }
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
              {colorItem.selected ? <span>✔</span> : ""}
            </button>
          ))}
        </div>

        <div className={styles.addBtnDiv}>
          {edit.id ? (
            <button
              className={styles.ekleBtn}
              onClick={handleSaveEditedNoteButton}
            >
              Ekle
            </button>
          ) : (
            <button className={styles.ekleBtn} onClick={handleAdd}>
              Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
