import React from 'react';
import { useSelector } from 'react-redux';
import {selectNotes} from "../../redux/notes/notesSlice"; //not'ları çektik.
import styles from "./styles.module.css"

function Content() {
    const item = useSelector(selectNotes);
    console.log(item);
  return (
    <div>
        {
           item.map((not) => (
                <div key={not.id}>
                    {not.text}
                </div>
            ))
        }
    </div>
  )
}

export default Content;