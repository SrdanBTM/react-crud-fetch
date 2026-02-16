

import Button from '../../ui/button/Button.jsx'
import Modal from '../../ui/modal/Modal.jsx'
import ModalForm from '../../feature/forms/ModalForm.jsx'



export default function EditModal({ 
  currentItem, 
  categoryOptions, 
  setOpenedModal, 
  setItems, 
  openedModal,
  setItemStatus
}) {

  function handleCancel() {
    setOpenedModal(null)
  }

  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
        type='button'
        onClick={handleCancel}
      />
      <Button
        title='Save'
        variant='saveButtonModal'
        type='submit'
        form='modalForm'
      />
    </>


  return (
    <Modal
      title='Edit item'
      footer={footer}
      setOpenedModal={setOpenedModal}
    >
      <ModalForm
        categoryOptions={categoryOptions}
        setItems={setItems}
        currentItem={currentItem}
        setOpenedModal={setOpenedModal}
        openedModal={openedModal}
        setItemStatus={setItemStatus}
      />
    </Modal>
  )
}


