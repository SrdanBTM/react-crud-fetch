

import Button from '../../ui/button/Button.jsx'
import Modal from '../../ui/modal/Modal.jsx'
import ModalForm from '../../feature/forms/ModalForm.jsx'



export default function EditModal({ currentItem, categoryOptions, setOpenedModal }) {

  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
      />
      <Button
        title='Save'
        variant='saveButtonModal'
      />
    </>


  return (
    <Modal
      title='Edit item'
      footer={footer}
      setOpenedModal={setOpenedModal}
    >
      <ModalForm categoryOptions={categoryOptions} />
    </Modal>
  )
}


