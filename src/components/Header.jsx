import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import ItemsContext from '../context/Items';

const Header = () => {

  const { setCurrentTab } = useContext(ItemsContext)

  const navStyles = classNames('px-8 py-4', {
    isActive: true,
  });

  const navigation = [
    {id: 1, name: "All", href:"/"},
    {id: 2, name: "Home", href: "/home"},
    {id: 3, name: "Presents", href:"/presents"},
    {id: 4, name: "Hobbies", href:"/hobbies"},
    {id: 5, name: "Fashion", href:"/fashion"}
  ]

  const handleClick = (e) => {
    setCurrentTab(e.target.innerHTML)
  }

  const renderNavigation = navigation.map((element) => {
    return <NavLink
      key={element.id}
      to={element.href}
      className={navStyles}
      onClick={handleClick}>
      {element.name}</NavLink>
  })
  return (
    <header>
      <ul className="grid grid-cols-5 text-center">
        {renderNavigation}
      </ul>
    </header>
  )
}

export default Header
