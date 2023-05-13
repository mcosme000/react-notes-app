import ListItem from "./ListItem"

const Header = () => {
  return (
    <header>
      <ul className="grid grid-cols-5 text-center">
        <ListItem selected>All</ListItem>
        <ListItem>Home</ListItem>
        <ListItem>Presents</ListItem>
        <ListItem>Hobbies</ListItem>
        <ListItem>Add</ListItem>
      </ul>
    </header>
  )
}

export default Header
