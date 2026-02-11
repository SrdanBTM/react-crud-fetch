

import styles from './resetButton.module.css'
import Button from '../../ui/button/Button.jsx'


export default function ResetButton() {

  return (
    <div className={styles.container}>
      <Button title='Reset filters' variant='reset' />
    </div>
  )
}