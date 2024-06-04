import React from 'react'
import "../App.css"
import Button from './Button'
import HeroImge from "../images/hero.jpg"
import Card from "../components/Card"


function Home() {
  return (
    <div className='Total_Home'>
        <div className='Home_Text'>
            <img src='https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/0f275b1c30123c908cc8491a86d9146a.png' alt='logoimg' />
            <div className='Home_h1_text'>
                <h1>Master the Developer’s Approach to Web Challenges</h1>
            </div>
            <p>Unlock the secrets of top web developers to solve complex problems efficiently. Join Shraddha Khapra in a live, hands-on project to elevate your coding skills. Build robust, scalable web applications and master core concepts.</p>
            <div className='Home_cards'>
                <Card/>
            </div>
            <Button title={"Register Now at ₹ 3999 "} />
            <a href='/'>Click here to get team discount</a>

        </div>
        <div className='Home_image'>
            <img src={HeroImge} alt='' />
            <a href='/'>Instructed by</a>
        </div>
        
    </div>
  )
}

export default Home