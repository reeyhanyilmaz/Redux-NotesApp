import React from 'react'
import styles from './styles.module.css' 

function FilterInput() {
  return (
    <div>
        <input type="text" className={styles.search} placeholder="Aramak istediğiniz kelimeyi yazınız" />
    </div>
  )
}

export default FilterInput;