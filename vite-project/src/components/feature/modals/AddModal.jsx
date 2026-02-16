

import Modal from '../../ui/modal/Modal.jsx'
import Button from '../../ui/button/Button.jsx'
import ModalForm from '../forms/ModalForm.jsx'


export default function AddModal({ categoryOptions, setOpenedModal, setItems }) {

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
        title='Add'
        variant='addButtonModal'
        type='submit'
        form='modalForm'
      />
    </>


  return (
    <Modal
      title='Add item'
      footer={footer}
      setOpenedModal={setOpenedModal}
    >
      <ModalForm
        categoryOptions={categoryOptions}
        setItems={setItems}
        setOpenedModal={setOpenedModal}
      />
    </Modal>
  )
}