

import styles from './main.module.css'
import ItemList from '../items-table/ItemsTable'


export default function Main({ items, setItemToDelete, setOpenedModal }) {

  return (
    <main className={styles.container}>
      <ItemList
        items={items}
        setItemToDelete={setItemToDelete}
        setOpenedModal={setOpenedModal}
      />
    </main>
  )
}