

import styles from './controlsBar.module.css'
import Select from '../../../ui/select/Select.jsx'
import Button from '../../../ui/button/Button.jsx'


export default function ControlsBar({ sortOptions, categoryOptions }) {

  return (
    <div className={styles.container}>
      <Select options={categoryOptions} />
      <Select options={sortOptions} />
      <Button title='Reset filters' variant='resetButtonFilter' />
    </div>
  )
}