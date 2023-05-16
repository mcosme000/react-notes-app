import Form from '../components/Form'

const Overlay = ({onClick}) => {
  return (
    <div className="absolute z-1 top-0 grid items-center w-full h-full bg-blue-600 bg-opacity-20">
      <Form onClick={onClick}/>
    </div>
  )
}

export default Overlay
