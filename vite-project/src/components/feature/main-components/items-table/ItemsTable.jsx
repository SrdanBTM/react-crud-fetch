

import styles from './itemsTable.module.css'
import ItemRow from '../item-row/ItemRow.jsx'


export default function ItemsTable({ items, setCurrentItem, setOpenedModal, selectedSortOption, selectedCategoryOption }) {


  const sortMap = {
    'Newest': (a, b) => b.createdAt - a.createdAt,
    'Oldest': (a, b) => a.createdAt - b.createdAt,
    'Title (A-Z)': (a, b) => a.title.localeCompare(b.title),
    'Title (Z-A)': (a, b) => b.title.localeCompare(a.title),
    'Price (Low-High)': (a, b) => a.price - b.price,
    'Price (High-Low)': (a, b) => b.price - a.price
  }

  const sortedItems = [...items]
  sortedItems.sort(sortMap[selectedSortOption])


  let categoryFilteredItems = sortedItems
  if (selectedCategoryOption !== 'All categories') {
    categoryFilteredItems = sortedItems.filter(item => item.category === selectedCategoryOption)
  }



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
        {categoryFilteredItems.map(item => (
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