

import styles from './itemRow.module.css'
import Button from '../../../ui/button/Button.jsx'


export default function ItemRow({
  item,
  setCurrentItem,
  setOpenedModal,
  itemStatus
}) {


  function handleDelete() {
    setCurrentItem(item)
    setOpenedModal('deleteModal')
  }

  function handleEdit() {
    setCurrentItem(item)
    setOpenedModal('editModal')
  }


  return (
    <tr className={`${styles.container} ${item.id === itemStatus.id ? styles[itemStatus.action] : ''}`} >
      <td className={styles.category}>{item.category}</td>
      <td className={styles.title}>{item.title}</td>
      <td className={styles.description}>{item.description}</td>
      <td className={styles.price}>{item.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</td>
      <td className={styles.actions}>
        <div>
          <Button
            title='Edit'
            variant='editButtonAction'
            onClick={handleEdit}
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


