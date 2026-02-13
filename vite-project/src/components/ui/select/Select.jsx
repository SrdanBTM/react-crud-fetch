

import styles from './select.module.css'


export default function Select({ options, width, id }) {

  return (
    <select
      className={styles.container}
      style={{ width: width }}
      id={id}
    >
      {options.map((op, index) => <option key={index}>{op}</option>)}
    </select>
  )
}

