

import styles from './modalForm.module.css'
import Input from '../../ui/input/Input.jsx'
import Select from '../../ui/select/Select.jsx'
import Textarea from '../../ui/textarea/Textarea.jsx'


export default function ModalForm({ categoryOptions }) {

  const modalCategoryOptions = ['', ...categoryOptions]

  return (
    <form className={styles.form}>

      <div className={styles.formField}>
        <label htmlFor='category'>Category</label>
        <Select id='category' options={modalCategoryOptions} width='100%' />
        <p className={styles.error}>Error</p>
      </div>

      <div className={styles.formField}>
        <label htmlFor='title'>Title</label>
        <Input id='title' />
        <p className={styles.error}>Error</p>
      </div>

      <div className={styles.formField}>
        <label htmlFor='price'>Price</label>
        <Input id='price' />
        <p className={styles.error}>Error</p>
      </div>

      <div className={styles.formField}>
        <label htmlFor='description'>Description</label>
        <Textarea id='description' />
        <p className={styles.error}>Error</p>
      </div>

    </form>
  )
}