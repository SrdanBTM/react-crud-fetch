

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'
import AddItem from '../add-item/AddItem.jsx'


export default function Header({ sortOptions, categoryOptions, setOpenedModal }) {

  const filterCategoryOptions = ['All categories', ...categoryOptions]

  return (
    <header className={styles.container}>
      <SearchBar />
      <ControlsBar
        sortOptions={sortOptions}
        categoryOptions={filterCategoryOptions}
      />
      <AddItem setOpenedModal={setOpenedModal} />
    </header>
  )
}