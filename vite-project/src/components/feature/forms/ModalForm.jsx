

import styles from './modalForm.module.css'
import Input from '../../ui/input/Input.jsx'
import Select from '../../ui/select/Select.jsx'


export default function ModalForm({ categoryOptions }) {

  return (
    <form className={styles.form}>
      <Select options={categoryOptions} width='100%' />
      <Input />
      <Input />
    </form>
  )
}