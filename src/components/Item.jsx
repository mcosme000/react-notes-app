import classnames from 'classnames'

const Item = ({data}) => {

  const cardClasses = classnames('mb-3 flex rounded-lg p-2', {
    'bg-home': data.category.toLowerCase() === 'home',
    'bg-food': data.category.toLowerCase() === 'food',
    'bg-presents': data.category.toLowerCase() === 'presents',
    'bg-fashion': data.category.toLowerCase() === 'fashion'
  })

  const tagClasses = classnames('flex items-center py-1 px-4 font-bold text-xs rounded-2xl', {
    'bg-home-dark': data.category.toLowerCase() === 'home',
    'bg-food-dark': data.category.toLowerCase() === 'food',
    'bg-presents-dark': data.category.toLowerCase() === 'presents',
    'bg-fashion-dark': data.category.toLowerCase() === 'fashion'
  })

  return (
    <div className={cardClasses}>
      <div className="w-16 h-16 md:w-36 md:h-28">
        <img src={data['image-url'] || 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80'}
        alt="product"/>
      </div>
      <div className="w-full px-2 flex flex-col">
        <div className="flex-grow flex items-start">
          <div className="flex-grow flex md:flex-col">
            <h3 className="text-sm md:text-lg">{data.name}</h3>
            <p className="text-sm md:text-md">{data.price} $</p>
          </div>
          {/* tag */}
          <div className={tagClasses}>
            <img
            src={require(`../media/${data.category}.png`)} alt="category icon"
            className="w-3 inline sm:mr-2"/>
            <p className="hidden sm:block">{data.category}</p>
          </div>
        </div>
        <div className="flex">
          <a href={data.link} target="_blank" rel="noreferrer"
          className="btn inline-block md:btn-main">Link</a>
          <button
          className="btn md:btn-main">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Item
