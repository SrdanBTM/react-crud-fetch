
import { useState, useEffect } from 'react'
import Main from './components/feature/main-components/main/Main.jsx'
import Header from './components/feature/header-components/header/Header.jsx'
import DeleteModal from './components/feature/modals/DeleteModal.jsx'
import AddModal from './components/feature/modals/AddModal.jsx'
import EditModal from './components/feature/modals/EditModal.jsx'


function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [openedModal, setOpenedModal] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)
  const [selectedSortOption, setSelectedSortOption] = useState('Newest')
  const [selectedCategoryOption, setSelectedCategoryOption] = useState('All categories')
  const [searchInputValue, setSearchInputValue] = useState(null)


  const sortOptions = ['Newest', 'Oldest', 'Title (A-Z)', 'Title (Z-A)', 'Price (Low-High)', 'Price (High-Low)']


  const categoryOptions = []
  const categories = items.map(item => item.category)
  categories.forEach(category => {
    if (!categoryOptions.includes(category)) {
      categoryOptions.push(category)
    }
  })


  useEffect(() => {
    async function load() {
      try {

        // fetch data and parse to json
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch items')
        }
        const data = await response.json()

        // add createdAt property to all items
        const items = data.products
        const baseTime = Date.now()
        const itemsWithCreatedAt = items.map((item, index) => ({
          ...item,
          createdAt: baseTime - (items.length - index)
        }))

        // update state with 'items with createdAt property'
        setItems(itemsWithCreatedAt)

      } catch (err) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [])



  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }


  return (
    <div className='app'>

      {openedModal === 'deleteModal'
        && <DeleteModal
          currentItem={currentItem}
          setOpenedModal={setOpenedModal}
          setItems={setItems}
        />
      }

      {openedModal === 'addModal'
        && <AddModal
          categoryOptions={categoryOptions}
          setOpenedModal={setOpenedModal}
          setItems={setItems}
          openedModal={openedModal}
        />
      }

      {openedModal === 'editModal'
        && <EditModal
          currentItem={currentItem}
          categoryOptions={categoryOptions}
          setOpenedModal={setOpenedModal}
          setItems={setItems}
          openedModal={openedModal}
        />
      }

      <Header
        sortOptions={sortOptions}
        categoryOptions={categoryOptions}
        setOpenedModal={setOpenedModal}
        setSelectedSortOption={setSelectedSortOption}
        setSelectedCategoryOption={setSelectedCategoryOption}
        setSearchInputValue={setSearchInputValue}
      />

      <Main
        items={items}
        setCurrentItem={setCurrentItem}
        setOpenedModal={setOpenedModal}
        selectedSortOption={selectedSortOption}
        selectedCategoryOption={selectedCategoryOption}
        searchInputValue={searchInputValue}
      />

    </div>
  )
}

export default App




