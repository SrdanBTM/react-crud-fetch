

import styles from './controlsBar.module.css'
import Select from '../../../ui/select/Select.jsx'
import Button from '../../../ui/button/Button.jsx'


export default function ControlsBar({ items }) {


  const categories = ['All categories']
  items.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
    }
  })
  const categoryOptions = categories.map(category => category[0].toUpperCase() + category.slice(1).toLowerCase())


  const sortOptions = ['Title (A-Z)', 'Title (Z-A)', 'Price (Low-High)', 'Price (High-Low)']


  return (
    <div className={styles.container}>
      <Select options={categoryOptions} />
      <Select options={sortOptions} />
      <Button title='Reset filters' variant='resetButtonFilter' />
    </div>
  )
}