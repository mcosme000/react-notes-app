import React, { useState, useContext } from 'react'
import ItemsContext from '../context/Items'


const Form = ({onClick}) => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    "image-url": "",
    price: "",
    category: ""
  })
  const { addItem } = useContext(ItemsContext)

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(formData)
    onClick()
    // setFormData({
    //   name: "", link: "", "image-url": "", price: "", category: ""
    // })
  }

  return (
    <div className="h-11/12 w-11/12 m-auto bg-white p-8">
      <div className="flex justify-between">
        <h1>Add a new item</h1>
        <button onClick={onClick}>Cancel</button>
      </div>
      <form className="h-full lg:flex justify-between" onSubmit={handleSubmit}>
        <div className="w-full lg:w-2/4 lg:p-5">
          <div>
            <label htmlFor="name" className="block">Item name</label>
            <input
              id="name" type="text"
              name="name" value={formData.name}
              onChange={handleChange}
              className="px-3.5 py-1 border-2 border-solid rounded mb-5 w-full"/>
          </div>
          <div>
            <label htmlFor="link" className="block">Product link</label>
            <input
              id="link" type="text"
              name="link" value={formData['link']}
              onChange={handleChange}
              className="px-3.5 py-1 border-2 border-solid rounded mb-5 w-full"/>
          </div>
          <div>
            <label htmlFor="image-url" className="block">Product image</label>
            <input
              id="image-url" type="text"
              name="image-url" value={formData['image-url']}
              onChange={handleChange}
              className="px-3.5 py-1 border-2 border-solid rounded mb-5 w-full"/>
          </div>
          <div>
            <label htmlFor="price" className="block">Price</label>
            <input
              id="price" type="number"
              name="price" value={formData.price}
              onChange={handleChange}
              className="px-3.5 py-1 border-2 border-solid rounded mb-5 w-full"/>
          </div>
        </div>
        <div className="w-full lg:w-2/4 lg:p-3">
          <fieldset>
            <legend>List category</legend>
            <div>
              <input
                  type="radio"
                  id="home"
                  name="category"
                  value="Home"
                  onChange={handleChange}
              />
              <label htmlFor="home">Home</label>
            </div>
            <div>
              <input
                  type="radio"
                  id="present"
                  name="category"
                  value="Present"
                  onChange={handleChange}
              />
              <label htmlFor="present">Presents</label>
            </div>
            <div>
              <input
                  type="radio"
                  id="hobby"
                  name="category"
                  value="Hobby"
                  onChange={handleChange}
              />
              <label htmlFor="hobby">Hobbies</label>
            </div>
            <div>
              <input
                  type="radio"
                  id="fashion"
                  name="category"
                  value="Fashion"
                  onChange={handleChange}
              />
              <label htmlFor="fashion">Fashion</label>
            </div>
          </fieldset>
          <button type="submit" className="w-full bg-blue-300">Add item</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
