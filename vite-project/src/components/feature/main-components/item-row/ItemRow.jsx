

import styles from './itemRow.module.css'
import Button from '../../../ui/button/Button.jsx'


export default function ItemRow({ item, setItemToDelete, setOpenedModal }) {


  function handleDelete() {
    setItemToDelete(item)
    setOpenedModal('deleteModal')
  }



  return (
    <tr className={styles.container}>
      <td className={styles.category}>{item.category}</td>
      <td className={styles.title}>{item.title}</td>
      <td className={styles.description}>{item.description}</td>
      <td className={styles.price}>{item.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</td>
      <td className={styles.actions}>
        <div>
          <Button
            title='Edit'
            variant='editButtonAction'
          />
          <Button
            title='Delete'
            variant='deleteButtonAction'
            onClick={handleDelete}
          />
        </div>
      </td>
    </tr>
  )
}


