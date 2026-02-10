

import styles from './itemRow.module.css'


export default function ItemRow({ item }) {

  return (
    <tr className={styles.container}>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}


