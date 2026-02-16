

import styles from './select.module.css'


export default function Select({ options, width, id, onChange, value, name }) {


  return (
    <select
      className={styles.container}
      style={{ width: width }}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      noValidate
    >
      {options.map(op => (
        <option
          key={op}
          value={op}
        >
          {op}
        </option>)
      )}
    </select>
  )
}

