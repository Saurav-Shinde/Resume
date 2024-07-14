import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className="container1">
      <div className="frontend">
        <img src="./images/frontend.png" alt="Frontend" />
        <h2>Frontend</h2>
        <div className="items">

          <div className="html">
            <img src="./images/html.png" alt="HTML Logo" />
            <p>HTML</p>
            <progress value="99" max="100">99%</progress>
          </div>
          
          <div className="css">
            <img src="./images/css.png" alt="CSS Logo" />
            <p>CSS</p>
            <progress value="99" max="100">99%</progress>
          </div>

          <div className="js">
            <img src="./images/js.png" alt="JavaScript Logo" />
            <p>JAVASCRIPT</p>
            <progress value="99" max="100">99%</progress>
          </div>

          <div className="reactjs">
            <img src="./images/react.png" alt="React JS Logo" />
            <p>REACT JS</p>
            <progress value="99" max="100">99%</progress>
          </div>
          
        </div>
      </div>

      <div className="backend">
        <img src="./images/backend.png" alt="Backend" />
        <h2>Backend</h2>

        <div className="items">

          <div className="nodejs">
            <img src="./images/node.png" alt="Node.js Logo" />
            <p>NODE JS</p>
            <progress value="99" max="100">99%</progress>
          </div>
        
          <div className="expressjs">
            <img src="./images/express.png" alt="Express.js Logo" />
            <p>EXPRESS JS</p>
            <progress value="99" max="100">99%</progress>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Skills
