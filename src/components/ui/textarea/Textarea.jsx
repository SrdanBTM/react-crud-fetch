

import styles from './textarea.module.css'


export default function Textarea({ id, onChange, value, name, maxLength, rows }) {

  return (
    <textarea
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      maxLength={maxLength}
      rows={rows}
      noValidate
    />
  )
}