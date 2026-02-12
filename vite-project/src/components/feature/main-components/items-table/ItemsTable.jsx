

import styles from './itemsTable.module.css'
import ItemRow from '../item-row/ItemRow.jsx'


export default function ItemsTable({ items, setCurrentItem, setOpenedModal }) {



  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <ItemRow
            key={item.id}
            item={item}
            setCurrentItem={setCurrentItem}
            setOpenedModal={setOpenedModal}
          />
        ))}
      </tbody>
    </table>
  )
}