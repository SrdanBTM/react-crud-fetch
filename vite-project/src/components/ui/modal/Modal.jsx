

import styles from './modal.module.css'
import Button from '../button/Button.jsx'


export default function Modal({ title, children, footer}) {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button title='X' variant='closeButtonModal' />

        <header>
          <h2>{title}</h2>
        </header>

        <div className={styles.content}>
          {children}
        </div>

        <footer>
          {footer}
        </footer>
      </div>
    </div>
  )
}

