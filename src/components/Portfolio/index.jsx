import React, { useState } from 'react'
import { Design, Downcon, Graficcon, Maincontainer, Motion, Webccon } from './style'
import web from '../../assets/img/web.png'
import web2 from '../../assets/img/web2.png'
import web3 from '../../assets/img/web3.png'
import web4 from '../../assets/img/web4.png'
import web5 from '../../assets/img/web5.png'
import web6 from '../../assets/img/web6.png'
import web7 from '../../assets/img/web7.png'
import web8 from '../../assets/img/web8.png'
import { Link } from 'react-scroll'
import Testimonial from '../Testimonial'




const Portfolio = () => {
   
  const  [shov, setShoww] = useState(true)
  // const [change, setChange] = useState("")

  //   let onChange = (e) => {
  //       const editingName = e.target.value
  //       setChange(editingName)
  //   }

  return (
   <Maincontainer>
      <h1>Portfolio</h1>
    <Downcon>
      <h2 onClick={ () => {setShoww(!shov)}}>Web design</h2>
      <h2>Graphic design</h2>
      <h2>Motion design</h2>
    </Downcon>
    <Design>
    <Webccon >
     <img src={web} alt="" className='img'/> 
      <img src={web2} alt="" className='img' />
      <img src={web3} alt="" className='img' />
      <img src={web4} alt="" className='img' />
      <img src={web5} alt="" className='img1' />
      <img src={web6} alt="" className='img1' />
      <img src={web7} alt="" className='img1' />
      <img src={web8} alt="" className='img1' /> 
    </Webccon>
    <Link><Graficcon>
      {/* <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" />
      <img src={web} alt="" /> */}
    </Graficcon></Link> 
    <Motion>
    <h1>hi</h1>
      {/* <img src={motion} alt="" />
      <img src={motion2} alt="" />
      <img src={motion3} alt="" />
      <img src={motion4} alt="" />
      <img src={motion5} alt="" />
      <img src={motion6} alt="" />
      <img src={motion7} alt="" />
      <img src={motion8} alt="" /> */}
    </Motion>
    </Design>
    <Testimonial/>
   </Maincontainer>
  )
}

export default Portfolio
