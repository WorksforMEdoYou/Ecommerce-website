import React from 'react'
import './Hero.css'
import hand_icon from '../Asserts/hand_icon.png'
import arrow_icon from '../Asserts/arrow.png'
import hero_imae from '../Asserts/pic40.png'
const Hero = () => {

    // unreveal effect
    window.onload = function() {
        var animateText = document.getElementById("animateText");
        animateText.style.animationPlayState = "running";
    }
    //end of unreveal effect

  return (
    <div className='hero'>
        <div className="hero-left" id='animateText'>
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="hand icon" />
                </div>
                <p>collections,</p>
                <p>collections for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="arrow img" />
            </div>
        </div>

        <div className="hero-right" id='animateText'>
            <img src={hero_imae} alt="hero img" />
        </div>
    </div>
  )
}

export default Hero