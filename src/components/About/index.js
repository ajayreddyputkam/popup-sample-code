// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-main-container">
    <Header />
    <div className="about-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-image-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-image-lg"
      />
    </div>
  </div>
)

export default About
