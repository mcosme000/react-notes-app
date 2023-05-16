const Item = ({data}) => {
  return (
    <div className="bg-gray-100 mb-3 flex rounded">
      <img src={data['image-url'] || 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80'}
      alt="product" className="w-24 object-cover"/>
      <div className="w-full p-4">
        <div className="flex items-start">
          <div className="flex-grow">
            <h3>{data.name}</h3>
            <p>{data.price} $</p>
          </div>
          <p className="py-1 px-4 font-bold text-xs bg-green-300 rounded-2xl">{data.category}</p>
        </div>
        <a href={data.link} target="_blank" rel="noreferrer"
        className="btn inline-block">Link</a>
        <button
        className="btn">Edit</button>
      </div>
    </div>
  )
}

export default Item
