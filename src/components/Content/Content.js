import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNotes, destroy } from "../../redux/notes/notesSlice"; //not'ları çektik selecNotes ile.
import styles from "./styles.module.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function Content() {
  const dispatch = useDispatch();

  // const colors = useSelector(state => state.color.colors)

  const handleDestroy = (id) => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      dispatch(destroy(id));
    }
  };

  const item = useSelector((state) => {
    if (state.serch === "") {
      //search boşsa items döndür (notlarımız yani).
      return state.notes.items;
    }
    return state.notes.items.filter((not) =>
      not.text.toLowerCase().includes(state.notes.search)
    );
  });
  console.log(item);

  return (
    <div className={styles.contentDiv}>
      {item.map((not, i) => (
        <span key={i} style={{ backgroundColor: not.color }}>
          <br></br>
          <p>{not.text}</p>

          <button className={styles.editButton}>
            <EditIcon />
          </button>

          <button
            className={styles.deleteButton}
            onClick={() => handleDestroy(not.id)}
          >
            <DeleteIcon />
          </button>
        </span>
      ))}
    </div>
  );
}

export default Content;
