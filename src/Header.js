import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <nav className={classes.header}>
      <Link to='/'>
          <img className={classes.header__logo} src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>
      {/* searchbox */}
      <div className='header__search'>
       <input type='text' className='header_searchInput' />
       <SearchIcon className='header__searchIcon' />
      </div>
      {/* signin / signout */}
      {/* links */}
       {/* basket */}
    </nav>
  )
}

export default Header
