import React from 'react'
import "./Workexps.css"

const Workexps = () => {
  return (
    <div className="main">
      <div className="project1">
        <img className='image1' src="./images/Logo.png" alt="Pet's product shop" />
        <p>• Online pet Product Shop (July, 2023 - October, 2023) : To develop an a convenient and secure online
          platform for pet owners for purchasing a variety of pet essentials. Users can create accounts to track order
          history, and the platform includes a robust search system for easy product discovery
        </p>
      </div>

      <div className="project2">
        <img className='image2' src="./images/Tanks.jpg" alt="Tank game" />
        <p>• Tank Game in Unreal Engine using C++ (Jan, 2023 - April, 2023) : To develop a game where user plays
          as a tank and objective of the game is to destroy all the enemy tanks. User can control tank movement and
          turret movement independently and can fire projectiles. Basic enemy AI was implemented
        </p>
      </div>
    </div>
  )
}

export default Workexps