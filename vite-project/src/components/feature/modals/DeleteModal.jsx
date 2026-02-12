

import Button from '../../ui/button/Button.jsx'
import Modal from '../../ui/modal/Modal.jsx'


export default function DeleteModal({ itemToDelete }) {

  const footer =
    <>
      <Button
        title='Cancel'
        variant='cancelButtonModal'
      />
      <Button
        title='Delete'
        variant='deleteButtonModal'
      />
    </>


  return (
    <Modal
      title='Delete item'
      footer={footer}
    >
      <>
        <p>Are you sure you want to delete:</p>
        <p>
          <strong>"{itemToDelete.title}"?</strong>
        </p>
        <p>This action cannot be undone.</p>
      </>
    </Modal>
  )
}




