

import styles from './controlsBar.module.css'
import Select from '../../../ui/select/Select.jsx'
import Button from '../../../ui/button/Button.jsx'


export default function ControlsBar({ sortOptions, categoryOptions }) {

  const filterCategoryOptions = ['All categories', ...categoryOptions]

  return (
    <div className={styles.container}>
      <Select options={filterCategoryOptions} width='auto' />
      <Select options={sortOptions} width='auto' />
      <Button title='Reset filters' variant='resetButtonFilter' />
    </div>
  )
}