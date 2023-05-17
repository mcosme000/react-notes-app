const Item = ({data}) => {
  return (
    <div className="bg-gray-100 mb-3 flex rounded-lg p-2">
      <div className="w-16 h-16 md:w-36 md:h-28">
        <img src={data['image-url'] || 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80'}
        alt="product"/>
      </div>
      <div className="w-full px-2 flex flex-col">
        <div className="flex-grow flex items-start">
          <div className="flex-grow flex md:flex-col">
            <h3 className="text-md md:text-lg">{data.name}</h3>
            <p className="text-sm md:text-lg">{data.price} $</p>
          </div>
          {/* tag */}
          <p className="py-1 px-4 font-bold text-xs bg-green-300 rounded-2xl">
            <span><img
            src={require(`../media/${data.category}.png`)} alt="category icon"
            className="w-3 inline mr-2"/></span>
            {data.category}</p>
        </div>
        <div className="flex">
          <a href={data.link} target="_blank" rel="noreferrer"
          className="btn inline-block md:btn-big">Link</a>
          <button
          className="btn md:btn-big">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Item
