import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faUser, faImages } from '@fortawesome/free-solid-svg-icons'

function NavbarAfterLogin(props) {
  const { loginCbHandler } = props;

  const logoutHandler = () => {
    localStorage.clear()
    loginCbHandler(false)
}

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-color sticky-top">
        <div className="container-sm">
          <Link className="nav-link" to='/home_user' >
          <h1 className="title-navbar">Codigram</h1>
          </Link>
          
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item item-style">
              <Link className="nav-link" to="/profile" style={{color: 'white'}}><span><FontAwesomeIcon icon={faUser} /></span>Profile</Link>
              </li>
              <li className="nav-item item-style">
                <Link className="nav-link"to="/postings" style={{color: 'white'}}><span><FontAwesomeIcon icon={faImages} /></span>Posting</Link>
              </li>
              <li className="nav-item item-style">
                <Link className="nav-link"to="/" onClick={() => logoutHandler()}style={{color: 'white'}}><span><FontAwesomeIcon icon={faDoorOpen} /></span>Logout</Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavbarAfterLogin