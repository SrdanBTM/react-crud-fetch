

import styles from './itemsList.module.css'
import Item from '../item/Item.jsx'


export default function ItemList({ items }) {

  return (
    <ul className={styles.container}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}