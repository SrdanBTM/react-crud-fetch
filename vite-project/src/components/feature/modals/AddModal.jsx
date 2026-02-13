

import Modal from '../../ui/modal/Modal.jsx'
import Button from '../../ui/button/Button.jsx'
import ModalForm from '../forms/ModalForm.jsx'


export default function AddModal({ categoryOptions, setOpenedModal }) {

  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
      />
      <Button
        title='Add'
        variant='addButtonModal'
      />
    </>


  return (
    <Modal
      title='Add item'
      footer={footer}
      setOpenedModal={setOpenedModal}
    >
      <ModalForm categoryOptions={categoryOptions} />
    </Modal>
  )
}