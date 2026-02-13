

import styles from './searchBar.module.css'


export default function SearchBar() {

  return (
      <input 
        className={styles.input}
        type='text'
        placeholder='Search by title...'
      />
  )
}