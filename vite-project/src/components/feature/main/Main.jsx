

import styles from './main.module.css'
import ItemList from '../items-list/ItemsList'


export default function Main({ items }) {

  return (
    <main className={styles.container}>
      <ItemList items={items} />
    </main>
  )
}