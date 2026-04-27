

import Button from '../../ui/button/Button.jsx'
import Modal from '../../ui/modal/Modal.jsx'


export default function DeleteModal({
  currentItem,
  setOpenedModal,
  setItems,
  setItemStatus
}) {


  function handleDelete() {
    setItemStatus({ id: currentItem.id, action: 'deleted' })
    setOpenedModal(null)

    setTimeout(() => {
      setItems(prev => prev.filter(item => item.id !== currentItem.id))
      setItemStatus({ id: '', action: '' })
    }, 1000)
  }


  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
        type='button'
      />
      <Button
        title='Delete'
        variant='deleteButtonModal'
        onClick={handleDelete}
        type='button'
      />
    </>


  return (
    <Modal
      title='Delete item'
      footer={footer}
      setOpenedModal={setOpenedModal}
    >
      <>
        <p>Are you sure you want to delete:</p>
        <p>
          <strong>"{currentItem.title}"?</strong>
        </p>
        <p>This action cannot be undone.</p>
      </>
    </Modal>
  )
}




