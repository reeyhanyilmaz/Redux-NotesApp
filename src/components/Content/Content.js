import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { selectNotes, destroy } from "../../redux/notes/notesSlice"; //not'ları çektik selecNotes ile.
import styles from "./styles.module.css";

function Content() {
  const dispatch = useDispatch();

  // const colors = useSelector(state => state.color.colors)

  const handleDestroy = (id)=> {
    if(window.confirm("Silmek istediğine emin misin?")){
      dispatch(destroy(id));
    }   
  }
  
  const item = useSelector(selectNotes);
  console.log(item);

  return (
    <div className={styles.contentDiv}>
      {item.map((not) => (
        <span key={not.id} style={{backgroundColor: not.color}}>
          <br></br>
          <p>{not.text}</p>           
          <button className={styles.deleteButton} onClick={() => handleDestroy(not.id)}>X</button>
        </span>
      ))}
    </div>
  );
}

export default Content;
