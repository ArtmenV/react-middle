import React from 'react'
import './index.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="container__header">
      <ul className="container__lineListHeader">
        <li><NavLink to="/contact" style={{ textDecoration: 'none' }}>Contact</NavLink></li>
        <li>about su</li>
        <li>apportunity</li>
        <li>link social</li>
        <li><NavLink to="/counter" style={{ textDecoration: 'none' }}>Counter</NavLink></li>
      </ul>
    </div>
  )
}

export default Header