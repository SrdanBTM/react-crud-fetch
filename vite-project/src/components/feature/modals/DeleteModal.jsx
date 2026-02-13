

import Button from '../../ui/button/Button.jsx'
import Modal from '../../ui/modal/Modal.jsx'


export default function DeleteModal({ currentItem, setOpenedModal, setItems }) {

  
  function handleDelete() {
    setItems(prev => prev.filter(item => item.id !== currentItem.id))
    setOpenedModal(null)
  }


  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
      />
      <Button
        title='Delete'
        variant='deleteButtonModal'
        onClick={handleDelete}
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




