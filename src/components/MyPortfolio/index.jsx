import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Btn, Container, Homecon, Icon, Leftcon, Logo, Menu, Navcon, Rightcon,Resmencon } from './style'
import {HiMenuAlt1} from 'react-icons/hi'
import logo from '../../assets/img/logo.png'
import partimg from '../../assets/img/image.png'
import { Button } from '@mui/material'
import AboutPage from '../AboutPage'


const MyPortfolio = () => {
   
  const  [show, setShow] = useState(false)
 

  return (
    <Container>
        <Navcon>
          <Logo src={logo}/>
                <Menu>
                <Link to='/home'><li>Home</li> </Link>
                <Link to='/AboutPage' ><li>About</li></Link>
                <Link to='/portfolio' ><li>Portfolio</li></Link>
                <Link to='/testimonial' ><li>Testimonial</li></Link>
                <Link to='/contact' ><li>Contact</li></Link>
            </Menu> 
            <Icon className='icon'>
              <HiMenuAlt1 onClick={() => {setShow(!show) }} />
            </Icon>
        </Navcon>
        {show && <Resmencon>
          <Link to='/home'><li>Home</li> </Link>
                <Link to='/AboutPage' ><li>About</li></Link>
                <Link to='/portfolio' ><li>Portfolio</li></Link>
                <Link to='/testimonial' ><li>Testimonial</li></Link>
                <Link to='/contact' ><li>Contact</li></Link>
          </Resmencon> }
        <Homecon>
            <Leftcon>
              <h4>Andriano Smith <br /> Web designer</h4>
              <p>Wide range option of furbitures crafted using the <br /> brst selected wood.</p>
             <Btn>
             <Button variant="contained">Hire me</Button>
             <Button className='btnn' variant="outlined">View portfolio</Button>
             </Btn>
            </Leftcon>
            <Rightcon>
                <img src={partimg} alt="" className='img' />
            </Rightcon>      
          </Homecon>
          
        <AboutPage/>
    </Container>
  )
}

export default MyPortfolio
