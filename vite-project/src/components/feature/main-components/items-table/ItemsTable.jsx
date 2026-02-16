

import styles from './itemsTable.module.css'
import ItemRow from '../item-row/ItemRow.jsx'


export default function ItemsTable({
  items,
  setCurrentItem,
  setOpenedModal,
  selectedSortOption,
  selectedCategoryOption,
  searchInputValue,
  itemStatus
}) {


  const sortMap = {
    'Newest': (a, b) => b.createdAt - a.createdAt,
    'Oldest': (a, b) => a.createdAt - b.createdAt,
    'Title (A-Z)': (a, b) => a.title.localeCompare(b.title),
    'Title (Z-A)': (a, b) => b.title.localeCompare(a.title),
    'Price (Low-High)': (a, b) => a.price - b.price,
    'Price (High-Low)': (a, b) => b.price - a.price
  }


  // sort items by sort option
  const sortedItems = [...items]
  sortedItems.sort(sortMap[selectedSortOption])

  // filter items by category
  let categoryFilteredItems = sortedItems
  if (selectedCategoryOption !== 'All categories') {
    categoryFilteredItems = sortedItems.filter(item => item.category === selectedCategoryOption)
  }

  // filter items by search value
  let searchedItems = categoryFilteredItems
  if (searchInputValue) {
    searchedItems = categoryFilteredItems.filter(item => item.title.toLowerCase().includes(searchInputValue.toLowerCase()))
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
        {searchedItems.map(item => (
          <ItemRow
            key={item.id}
            item={item}
            setCurrentItem={setCurrentItem}
            setOpenedModal={setOpenedModal}
            itemStatus={itemStatus}
          />
        ))}
      </tbody>
    </table>
  )
}