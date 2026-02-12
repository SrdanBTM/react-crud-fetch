

import styles from './main.module.css'
import ItemTable from '../items-table/ItemsTable'


export default function Main({ items, setCurrentItem, setOpenedModal }) {

  return (
    <main className={styles.container}>
      <ItemTable
        items={items}
        setCurrentItem={setCurrentItem}
        setOpenedModal={setOpenedModal}
      />
    </main>
  )
}