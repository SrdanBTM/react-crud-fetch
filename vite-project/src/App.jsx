
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


  const sortOptions = ['Title (A-Z)', 'Title (Z-A)', 'Price (Low-High)', 'Price (High-Low)']

  const categories = []
  items.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
    }
  })
  const categoryOptions = categories.map(category => category[0].toUpperCase() + category.slice(1).toLowerCase())



  useEffect(() => {
    async function load() {
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch items')
        }
        const data = await response.json()
        setItems(data.products)
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
        />
      }

      {openedModal === 'editModal'
        && <EditModal
          currentItem={currentItem}
          categoryOptions={categoryOptions}
          setOpenedModal={setOpenedModal}
        />
      }

      <Header
        sortOptions={sortOptions}
        categoryOptions={categoryOptions}
        setOpenedModal={setOpenedModal}
      />

      <Main
        items={items}
        setCurrentItem={setCurrentItem}
        setOpenedModal={setOpenedModal}
      />

    </div>
  )
}

export default App




