

import styles from './searchBar.module.css'


export default function SearchBar({ onChange, value }) {

  return (
    <input
      className={styles.input}
      type='text'
      placeholder='Search by title...'
      onChange={onChange}
      value={value}
    />
  )
}