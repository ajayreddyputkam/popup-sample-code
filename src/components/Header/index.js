// Write your code here

import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="header-items-container">
      <Link to="/" className="link-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="hamburger-icon-button"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        modal="true"
        className="popup-content"
      >
        {close => (
          <div className="popup-container-main">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="popup-home-about-container">
              <Link to="/" className="link-item">
                <li className="popup-home-container">
                  <AiFillHome className="popup-home-icon" />
                  <p className="popup-home-text">Home</p>
                </li>
              </Link>
              <Link to="/about" className="link-item">
                <li className="popup-about-container">
                  <BsInfoCircleFill className="popup-about-icon" />
                  <p className="popup-about-text">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
