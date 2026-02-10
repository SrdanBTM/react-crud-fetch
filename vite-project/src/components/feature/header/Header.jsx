

import styles from './header.module.css'
import Search from '../search/Search.jsx'
import Filter from '../filter/Filter.jsx'

export default function Header() {

  return (
    <header className={styles.container}>
      <Search />
      <Filter />
    </header>
  )
}