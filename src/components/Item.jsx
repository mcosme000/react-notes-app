const Item = ({data}) => {
  return (
    <div className="bg-white mb-3">
      <img src={data.url} alt="product"/>
      <p>{data.name}</p>
      <p>{data.price}</p>
    </div>
  )
}

export default Item
