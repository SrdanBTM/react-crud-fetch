

import styles from './itemRow.module.css'


export default function ItemRow({ item }) {

  return (
    <tr className={styles.container}>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td className={styles.price}>{item.price}</td>
      <td className={styles.actions}>
        <button className={`${styles.button} ${styles.edit}`}>Edit</button>
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      </td>
    </tr>
  )
}


