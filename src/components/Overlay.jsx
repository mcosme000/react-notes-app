import Form from '../components/Form'

const Overlay = ({onClick}) => {
  return (
    <div className="absolute top-0 left-0 grid items-center w-full h-full bg-blue-600 bg-opacity-20">
      <Form onClick={onClick}/>
    </div>
  )
}

export default Overlay
