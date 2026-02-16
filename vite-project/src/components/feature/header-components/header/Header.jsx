

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'
import AddItem from '../add-item/AddItem.jsx'


export default function Header({ sortOptions, categoryOptions, setOpenedModal, setSelectedSortOption, setSelectedCategoryOption }) {

  return (
    <header className={styles.container}>
      <SearchBar />
      <ControlsBar
        sortOptions={sortOptions}
        categoryOptions={categoryOptions}
        setSelectedSortOption={setSelectedSortOption}
        setSelectedCategoryOption={setSelectedCategoryOption}
      />
      <AddItem setOpenedModal={setOpenedModal} />
    </header>
  )
}