

import Button from "../../../ui/button/Button.jsx"


export default function AddItem({ setOpenedModal }) {

  function handleAddItem() {
    setOpenedModal('addModal')
  }

  return (
    <Button
      title='+ Add item'
      variant='addButtonHeader'
      onClick={handleAddItem}
    />
  )
}