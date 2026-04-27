

import styles from './controlsBar.module.css'
import Select from '../../../ui/select/Select.jsx'
import Button from '../../../ui/button/Button.jsx'


export default function ControlsBar({
  sortOptions,
  categoryOptions,
  selectedSortOption, setSelectedSortOption,
  selectedCategoryOption, setSelectedCategoryOption,
  setSearchInputValue
}) {


  const filterCategoryOptions = ['All categories', ...categoryOptions]


  function handleChangeSortOption(e) {
    setSelectedSortOption(e.target.value)
  }

  function handleChangeCategoryOption(e) {
    setSelectedCategoryOption(e.target.value)
  }

  function handleClickResetFilters() {
    setSelectedSortOption(sortOptions[0])
    setSelectedCategoryOption(filterCategoryOptions[0])
    setSearchInputValue('')
  }


  return (
    <div className={styles.container}>
      <Select
        options={filterCategoryOptions}
        onChange={handleChangeCategoryOption}
        width='auto'
        value={selectedCategoryOption}
      />
      <Select
        options={sortOptions}
        onChange={handleChangeSortOption}
        width='auto'
        value={selectedSortOption}
      />
      <Button
        title='Reset filters'
        variant='resetButtonFilter'
        onClick={handleClickResetFilters}
        type='button' />
    </div>
  )
}