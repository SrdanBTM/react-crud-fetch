

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'

export default function Header({ sortOptions, categoryOptions }) {

  const filterCategoryOptions = ['All categories', ...categoryOptions]

  return (
    <header className={styles.container}>
      <SearchBar />
      <ControlsBar
        sortOptions={sortOptions}
        categoryOptions={filterCategoryOptions}
      />
    </header>
  )
}