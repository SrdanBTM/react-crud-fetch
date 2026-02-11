

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'

export default function Header() {

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <SearchBar />
        <ControlsBar />
      </div>
    </header>
  )
}