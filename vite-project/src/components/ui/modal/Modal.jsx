

import styles from './modal.module.css'
import Button from '../button/Button.jsx'


export default function Modal({ title, content, footer}) {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button title='X' variant='closeButtonModal' />

        <header>
          {title}
        </header>

        <div className={styles.content}>
          {content}
        </div>

        <footer>
          {footer}
        </footer>
      </div>
    </div>
  )
}

