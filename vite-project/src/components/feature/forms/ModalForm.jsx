

import styles from './modalForm.module.css'
import Input from '../../ui/input/Input.jsx'
import Select from '../../ui/select/Select.jsx'
import Textarea from '../../ui/textarea/Textarea.jsx'
import { useState } from 'react'


export default function ModalForm({ categoryOptions, setItems, setOpenedModal }) {

  const modalCategoryOptions = ['', ...categoryOptions]

  const [formValues, setFormValues] = useState({ category: '', title: '', price: '', description: '' })
  const [errors, setErrors] = useState({})


  function handleChange(e) {
    setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => {
      const newPrev = { ...prev }
      delete newPrev[e.target.name]
      return newPrev
    })
  }


  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (!formValues.category) {
      newErrors.category = 'Category is required'
    }

    if (!formValues.title) {
      newErrors.title = 'Title is required'
    }

    if (!formValues.price) {
      newErrors.price = 'Price is required'
    } else if (Number(formValues.price) <= 0) {
      newErrors.price = 'Price cannot be negative or null'
    }

    if (!formValues.description) {
      newErrors.description = 'Description is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const newItem = { ...formValues, price: Number(formValues.price), id: crypto.randomUUID() }
      setItems(prev => [newItem, ...prev])
      setOpenedModal(null)
    }

  }


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      id='modalForm'
    >
      <div className={styles.formField}>
        <label htmlFor='category'>Category</label>
        <Select
          id='category'
          options={modalCategoryOptions}
          width='100%'
          onChange={handleChange}
          value={formValues.category}
          name='category'
        />
        {errors.category
          && <p className={styles.error}>{errors.category}</p>
        }
      </div>

      <div className={styles.formField}>
        <label htmlFor='title'>Title</label>
        <Input
          type='text'
          id='title'
          onChange={handleChange}
          value={formValues.title}
          name='title'
        />
        {errors.title
          && <p className={styles.error}>{errors.title}</p>
        }
      </div>

      <div className={styles.formField}>
        <label htmlFor='price'>Price</label>
        <Input
          type='number'
          id='price'
          onChange={handleChange}
          value={formValues.price}
          name='price'
          step={0.01}
        />
        {errors.price
          && <p className={styles.error}>{errors.price}</p>
        }
      </div>

      <div className={styles.formField}>
        <label htmlFor='description'>Description</label>
        <Textarea
          id='description'
          onChange={handleChange}
          value={formValues.description}
          name='description'
          maxLength={1000}
          rows={8}
        />
        {errors.description
          && <p className={styles.error}>{errors.description}</p>
        }
      </div>

    </form>
  )
}