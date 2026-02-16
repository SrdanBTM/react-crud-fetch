

import styles from './controlsBar.module.css'
import Select from '../../../ui/select/Select.jsx'
import Button from '../../../ui/button/Button.jsx'


export default function ControlsBar({ sortOptions, categoryOptions, setSelectedSortOption, setSelectedCategoryOption }) {

  const filterCategoryOptions = ['All categories', ...categoryOptions]


  function handleChangeSortOption(e) {
    setSelectedSortOption(e.target.value)
  }

  function handleChangeCategoryOption(e) {
    setSelectedCategoryOption(e.target.value)
  }


  return (
    <div className={styles.container}>
      <Select options={filterCategoryOptions} onChange={handleChangeCategoryOption} width='auto' />
      <Select options={sortOptions}  onChange={handleChangeSortOption} width='auto' />
      <Button title='Reset filters' variant='resetButtonFilter' />
    </div>
  )
}