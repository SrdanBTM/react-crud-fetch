

import styles from './itemRow.module.css'
import Button from '../../ui/button/Button.jsx'


export default function ItemRow({ item }) {

  return (
    <tr className={styles.container}>
      <td className={styles.category}>{item.category}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td className={styles.price}>{item.price}</td>
      <td className={styles.actions}>
        <Button title='Edit' variant='edit' />
        <Button title='Delete' variant='delete' />
      </td>
    </tr>
  )
}


