import React from 'react'
import Img1 from '../images/book.jpg'
import Img2 from "../images/head.jpg"
import Img3 from "../images/paper.jpg"
import Img4 from "../images/selection.jpg"
import Img5 from "../images/graph.jpg"


const InfoData=[
    {
        img:Img1,
        p:'Enhance Your Problem-Solving Skills'
    },
    {
        img:Img3,
        p:'Adopt a Structured Approach to Development'
    },
    {
        img:Img4,
        p:'Gain Practical Experience'
    },
    {
        img:Img5,
        p:'Develop Emotional Intelligence and Soft Skills'
    },
    {
        img:Img2,
        p:'Expand Your Professional Network'
    },
]

function Info() {
  return (
    <div className='Total_Info'>
       <div className='Info_Text'>
        <h1>But,</h1>
        <h2>Why should you become a Mindful Developer?</h2>
       </div>
       <div className='Info_Card'  data-aos="fade-right">
            {InfoData.map((Data)=>{
                const{img,p} = Data;
                return(
                    <div className='Inner_Info_Card'>
                    <img  src={img} alt='images'/>
                    <p>{p}</p>
                    </div>
                );
            })}
       </div>
    </div>
  )
}

export default Info