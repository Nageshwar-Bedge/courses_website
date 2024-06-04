import React from 'react'
import "../App.css"

function card() {
  return (
    <div className='Total_Cards'> 
        <div className='Card_Home'>
            <lord-icon
            src="https://cdn.lordicon.com/abfverha.json"
            trigger="loop"
            colors="primary:#ffffff"
            style={{width:"40px",height:"40px"}}>
            </lord-icon>
            <p>5th June</p>
        </div>
        <div className='Card_Home'>
        <lord-icon
            src="https://cdn.lordicon.com/mwikjdwh.json"
            trigger="loop"
            state="loop-clock"
            colors="primary:#ffffff"
            style={{width:"40px",height:"40px"}}>
        </lord-icon>
            <p>10 AM<br/>Onwards</p>
        </div>
        <div className='Card_Home'>
        <i className="fa-solid fa-hourglass"></i>
            <p>5 months</p>
        </div>    

    </div>
  )
}

export default card