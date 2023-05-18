import React, { useState, useContext } from 'react'
import ItemsContext from '../context/Items'


const Form = ({onClick, item}) => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    image: "",
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
  }

  return (
    <div className="h-11/12 w-11/12 m-auto bg-white py-8 px-4 rounded-lg">
      <div className="flex justify-between">
        <h1 className="lg:pl-5">Add a new item</h1>
        <button onClick={onClick} className="btn bg-red-default hover:bg-red-hover text-white font-bold">Cancel</button>
      </div>
      <form className="h-full lg:flex justify-between" onSubmit={handleSubmit}>
        <div className="w-full lg:w-2/4 lg:p-5">
          <div>
            <label htmlFor="name" className="block">Item name</label>
            <input
              id="name" type="text"
              name="name" value={formData.name}
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="link" className="block">Product link</label>
            <input
              id="link" type="text"
              name="link" value={formData['link']}
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="image" className="block">Product image</label>
            <input
              id="image" type="text"
              name="image" value={formData['image']}
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="price" className="block">Price</label>
            <input
              id="price" type="number"
              name="price" value={formData.price}
              onChange={handleChange}
              className="lg:last:mb-0"/>
          </div>
        </div>
        <div className="w-full lg:w-2/4 lg:p-5 lg:mt-3 flex flex-col">
          <fieldset className="flex-grow">
            <h3>List category</h3>
            {/* FIRST ROW: radio buttons in two columns in md screens */}
            <div className="flex lg:block">
              <div className="mr-10">
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
                    value="Presents"
                    onChange={handleChange}
                />
                <label htmlFor="present">Presents</label>
              </div>
            </div>
            {/* SECOND ROW: radio buttons in two columns in md screens */}
            <div className="flex lg:block">
              <div className="mr-10">
                <input
                    type="radio"
                    id="food"
                    name="category"
                    value="Food"
                    onChange={handleChange}
                />
                <label htmlFor="food">Food</label>
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
            </div>
          </fieldset>
          <button type="submit" className="btn btn-big bg-green-default hover:bg-green-hover">Add item</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
