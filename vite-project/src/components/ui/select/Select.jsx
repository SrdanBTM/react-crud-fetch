

import styles from './select.module.css'


export default function Select({ options }) {

  return (
    <select className={styles.container}>
      {options.map((op, index) => <option key={index}>{op}</option>)}
    </select>
  )
}

