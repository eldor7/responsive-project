import React, { useRef } from 'react'
import { Contaiiner, Footercon, Fromcon, Icon, Leftcon, Mapcon, Nextcon, Paragrif, Tcon, Textcon } from './style'
import img1 from '../../assets/img/img1.png'
import imge from '../../assets/img/imge.png'
import map from '../../assets/img/map.png'
import twitter from '../../assets/img/twitter.png'
import meta from '../../assets/img/facebook.png'
import be from '../../assets/img/behance.png'
import insta from '../../assets/img/instagramm.png'
import tube from '../../assets/img/youtube.png'


const Testimonial = () => {
   
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const inputRef = useRef(null)

  


  let onClick = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    inputRef.current.value = '';

  }

  return (
    
    <Contaiiner>
      <h1>Testimonial</h1>
      <Textcon>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <h4>Ronald Richards  <span>5/19/12</span></h4>
      </Textcon>
      <Nextcon>
        <Tcon>
          <img src={img1} alt="" />
        </Tcon>
        <Icon>
          <img src={imge} alt="" />
        </Icon>
      </Nextcon>
       <Fromcon>
        <Leftcon>
          <h1>Get in touch.</h1>
          <input type="text" placeholder='Name' maxLength={10} ref={nameRef} className='name' />
          <input type="email" placeholder='Email' ref={emailRef} className ='email' />
          <textarea name="" id="" cols="30" placeholder='Message' ref={inputRef} rows="10"></textarea>
          <button onClick={onClick}>Send message</button>
        </Leftcon>
        <Mapcon>
         <a href="https://map.kakao.com"><img src={map} alt="" /></a>
        </Mapcon>
       </Fromcon>
       <Footercon>
        <Paragrif>
           <h1>Follow me</h1>
        </Paragrif>
        <img src={twitter} alt="" />
        <img src={meta} alt="" />
        <img src={be} alt="" />
        <img src={insta} alt="" />
        <img src={tube} alt="" />
       </Footercon>
    </Contaiiner>


  )
}

export default Testimonial
