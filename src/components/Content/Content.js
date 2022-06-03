import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {destroy, update} from "../../redux/notes/notesSlice"; //not'ları çektik selecNotes ile.
import styles from "./styles.module.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function Content() {
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      dispatch(destroy(id));
    }
  };

  const items = useSelector((state) => {
    if (state.search === "") {
      //search boşsa items döndür (notlarımız yani).
      return state.notes.items;
    }
    return state.notes.items.filter((notes) =>
      notes.text.toLowerCase().includes(state.notes.search)
    );
  });
  console.log(items);

  const handleUpdate = (id, text, color, time) => {
    dispatch(update({ id, text, color, time }));
  };

  return (
    <div className={styles.contentDiv}>
      {items.map((not, i) => (
        <span key={i} style={{ backgroundColor: not.color }}>
          <div className={styles.time}>{not.time}</div>
          <br></br>
          <p>{not.text}</p>
          <button
            className={styles.editButton}
            onClick={() => handleUpdate(not.id, not.text, not.color)}
          >
            <EditIcon color="black" />
          </button>

          <button
            className={styles.deleteButton}
            onClick={() => handleDestroy(not.id)}
          >
            <DeleteIcon color="black" />
          </button>
        </span>
      ))}
    </div>
  );
}

export default Content;
