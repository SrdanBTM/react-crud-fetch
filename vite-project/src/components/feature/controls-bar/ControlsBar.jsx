

import styles from './controlsBar.module.css'
import CategorySelect from '../category-select/CategorySelect.jsx'
import SortSelect from '../sort-select/SortSelect.jsx'
import Button from '../../ui/button/Button.jsx'


export default function ControlsBar() {

  return (
    <div className={styles.container}>
      <CategorySelect />
      <SortSelect />
      <Button title='Reset filters' variant='reset' />
    </div>
  )
}