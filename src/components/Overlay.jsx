import Form from '../components/Form'

const Overlay = ({onClick}) => {
  return (
    <div className="absolute top-0 left-0 rounded-md grid items-center w-full h-full bg-overlay bg-opacity-80">
      <Form onClick={onClick}/>
    </div>
  )
}

export default Overlay
