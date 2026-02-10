

import styles from './button.module.css'


export default function Button({title, variant}) {

  return (
    <button className={`${styles.button} ${styles[variant]}`}>{title}</button>
  )
}