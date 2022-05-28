import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../redux/notes/notesSlice"; //not'ları çektik.
import styles from "./styles.module.css";

function Content() {
  const item = useSelector(selectNotes);
  console.log(item);
  return (
    <div className={styles.contentDiv}>
      {item.map((not) => (
        <span key={not.id}>
          <p>{not.text}</p> 
          <button className={styles.deleteButton}>X</button>
        </span>
      ))}
    </div>
  );
}

export default Content;
