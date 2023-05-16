import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import ItemsContext from '../context/Items';

const Header = () => {

  const { setCurrentTab } = useContext(ItemsContext)

  const navStyles = classNames('px-4 py-3 lg:px-8 lg:py-8 inline-block first:rounded-tl-lg last:rounded-tr-lg', {
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
      {element.name}
    </NavLink>
  })
  return (
    <header className="overflow-x-auto">
      <ul className="w-screen lg:w-full flex justify-between flex-nowrap lg:grid lg:grid-cols-5 text-center">
        {renderNavigation}
      </ul>
    </header>
  )
}

export default Header
