

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'

export default function Header({ items }) {

  return (
    <header className={styles.container}>
      <SearchBar />
      <ControlsBar items={items} />
    </header>
  )
}