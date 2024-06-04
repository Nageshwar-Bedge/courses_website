import React from 'react'
import AboutImage from "../images/about.jpg"



function About() {
  return (
    <div className='Total_About'>
            <div className='Cards_About'>
            <div className='Card_Text'>
            <h1>ABOUT <span>APNA COLLEGE</span></h1>
            <p>Unleash your creativity and ingenuity in web development. Don’t delay your dreams—begin your journey to becoming a top developer today!</p>
            </div>
                <div className='Sub_About'>
                <img src={AboutImage} alt='imae' />
                <div className='Text_Card_About'>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p>Master a <b>structured approach</b> to web development.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Get coached by</b> top industry experts.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Learn by doing</b> work on real-world projects in a collaborative environment.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Expand your network</b> within a community of like-minded peers.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Find your development partners</b> and build your dream team among fellow learners and alumni.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default About