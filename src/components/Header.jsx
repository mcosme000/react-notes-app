import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import ItemsContext from '../context/Items';

const Header = () => {

  const { setCurrentTab } = useContext(ItemsContext)

  const navStyles = classNames('px-4 py-3 w-64 md:w-auto lg:px-4 lg:py-5 first:rounded-tl-lg last:rounded-tr-lg bg-slate-50', {
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
    <header className="z-10 overflow-x-auto overflow-hidden">
      <div className="w-screen overflow-x-auto">
        <ul className="flex justify-between flex-nowrap md:grid md:grid-cols-5 text-center">
          {renderNavigation}
        </ul>
      </div>
    </header>
  )
}

export default Header
