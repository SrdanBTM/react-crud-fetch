

import styles from './header.module.css'
import SearchBar from '../search-bar/SearchBar.jsx'
import ControlsBar from '../controls-bar/ControlsBar.jsx'
import AddItem from '../add-item/AddItem.jsx'


export default function Header({ 
  sortOptions, 
  categoryOptions, 
  setOpenedModal, 
  selectedSortOption, setSelectedSortOption, 
  selectedCategoryOption, setSelectedCategoryOption, 
  searchInputValue, setSearchInputValue
}) {


  function handleChange(e) {
    setSearchInputValue(e.target.value)
  }


  return (
    <header className={styles.container}>
      <SearchBar
        onChange={handleChange}
        value={searchInputValue}
      />
      <ControlsBar
        sortOptions={sortOptions}
        categoryOptions={categoryOptions}
        selectedSortOption={selectedSortOption}
        selectedCategoryOption={selectedCategoryOption}
        setSelectedSortOption={setSelectedSortOption}
        setSelectedCategoryOption={setSelectedCategoryOption}
        setSearchInputValue={setSearchInputValue}
      />
      <AddItem
        setOpenedModal={setOpenedModal}
      />
    </header>
  )
}