

import styles from './select.module.css'


export default function Select({ options, width }) {

  return (
    <select
      className={styles.container}
      style={{width: width}}
    >
      {options.map((op, index) => <option key={index}>{op}</option>)}
    </select>
  )
}

