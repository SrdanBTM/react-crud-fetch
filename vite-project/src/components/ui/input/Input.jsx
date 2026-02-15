

import styles from './input.module.css'


export default function ItemInput({ id, onChange, value, name, type, step }) {

  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      step={step}
      noValidate
    />
  )
}