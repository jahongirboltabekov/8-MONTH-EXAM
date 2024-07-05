import React, { useState } from 'react'
import './CreateProduct.scss'

const initialState = {
  title:"",
  price:"",
  images:"",
  category:"",
  decs: ""
}

function CreateProduct() {

  const [form,setForm] = useState(initialState)

  const handleChange = e => {
    let{name,value} = e.target
    setForm(prev => ({...prev,[name]:value}))
  }

  const handleCreate = e => {
    e.preventDefault()
    form.price = +form.price
    form.images = form.images.split('\n').filter(i => i.trim())
    console.log(form);
  }

  return (
    <div className='creat_product_wrap'>
      <h1>Create product</h1>
      <form onSubmit={handleCreate} action="">
        <div className="create_input">
          <h3>Title</h3>
          <input required name='title' value={form.title} onChange={handleChange} type="text" />
        </div>
        <div className="create_input">
          <h3>Price</h3>
          <input required name='price' value={form.price} onChange={handleChange} type="text" />
        </div>
        <div  className="create_input">
          <h3>Image-url</h3>
          <textarea required name='images' value={form.images} onChange={handleChange} type="text" />
        </div>
        <div className="create_input">
          <h3>Category</h3>
          <select name="category" value={form.category} onChange={handleChange}  id="">
            <option value="">Tanlang</option>
            <option value="TV">TV</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Air conditioner">Air conditioner</option>
          </select>
        </div>
        <div className="create_input">
          <h3>Desc</h3>
          <textarea required name="decs" value={form.decs} onChange={handleChange}  id="" cols="30" rows="10"></textarea>
        </div>
        <div className="create_button">
          <button>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct