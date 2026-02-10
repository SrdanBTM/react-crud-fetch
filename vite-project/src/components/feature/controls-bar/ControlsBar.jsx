

import styles from './controlsBar.module.css'
import CategorySelect from '../category-select/CategorySelect.jsx'
import SortSelect from '../sort-select/SortSelect.jsx'
import ResetButton from '../reset-button/ResetButton.jsx'


export default function ControlsBar() {

  return (
    <div className={styles.container}>
      <CategorySelect />
      <SortSelect />
      <ResetButton />
    </div>
  )
}