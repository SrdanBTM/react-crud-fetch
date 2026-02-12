
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

      {openedModal === 'deleteModal' && <DeleteModal />}
      {openedModal === 'addModal' && <AddModal />}
      {openedModal === 'editModal' && <EditModal />}

      <Header items={items} />
      <Main items={items} />
      
    </div>
  )
}

export default App




