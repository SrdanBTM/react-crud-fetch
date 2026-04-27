

import styles from './button.module.css'


export default function Button({ title, variant, onClick, type, form }) {

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      form={form}
    >
      {title}
    </button>
  )
}