

import styles from './itemsTable.module.css'
import ItemRow from '../item-row/ItemRow.jsx'


export default function ItemsTable({ items }) {



  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <ItemRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  )
}