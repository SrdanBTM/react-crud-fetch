

import styles from './button.module.css'


export default function Button({ title, variant, onClick }) {

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}