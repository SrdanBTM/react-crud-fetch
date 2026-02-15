

import styles from './itemsTable.module.css'
import ItemRow from '../item-row/ItemRow.jsx'


export default function ItemsTable({ items, setCurrentItem, setOpenedModal }) {


  const sortedItemsByCreatedAt = items.sort((a, b) => b.createdAt - a.createdAt)


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
        {sortedItemsByCreatedAt.map(item => (
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