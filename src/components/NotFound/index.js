// Write your code here

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-main-container">
    <Header />
    <div className="not-found-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page.
      </p>
    </div>
  </div>
)

export default NotFound
