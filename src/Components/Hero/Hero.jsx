import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero—content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p> Passionate Frontend Developer I Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>  

        <div className="hero—img">
            <div>
                <div className="tech-hero">
                    <img className='hero' src="./images/hero.jpg" alt=""></img>
                </div>
              <img src="" alt="" /> 
            </div>       

            <div className='icon-container'>
                <div className="tech—icon">
                    <img className='icons' src="./images/icons8-html-5-48.png" alt=""></img>
                </div>
                <div className="tech—icon">
                    <img className='icons' src="./images/icons8-css3-48.png" alt=""></img>
                </div>
                <div className="tech—icon">
                    <img className='icons' src="./images/icons8-javascript-48.png" alt=""></img>
                </div>
            </div> 
        </div>    
    </section>
    )
}

export default Hero