
import { useState, useEffect } from 'react'


function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)


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
    <div>
      
    </div>
  )
}

export default App




