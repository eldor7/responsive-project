import React from 'react'
import { Downcon, Left, Leftcon, Littlecon, Maincon, Right, Rightcon, Skilleft, Skillscon, SkilRight } from './style'
import left from '../../assets/img/left.png'
import line from '../../assets/img/line.png'
import Portfolio from '../Portfolio'




const AboutPage = () => {
  return (
     <Maincon>
        <h1>About</h1>
        <Downcon>
          <Leftcon src={left} />
          <Rightcon>
            <h2>Hello!</h2>
            <h3>Web designer, Graphic designer, <br /> Motion designer.</h3>
            <p>Wide range option of furbitures crafted using the brst selected wood in the city  so that it makes your home look more elegant and modern</p>
            <Littlecon>
                <Left>
                <div>Name:</div>
                <div>Age:</div>
                </Left>
                <Right>
                <div>Email:</div>
                <div>Address: </div>
                </Right>
            </Littlecon>
          </Rightcon>
        </Downcon>
        <Skillscon>
          <Skilleft>
              <h1>Design skills</h1>
              <h2>Web design <span>85%</span></h2>
              <img src={line} alt="" />
              <h2>Graphic design <span>85%</span></h2>
              <img src={line} alt="" />
              <h2>Motion design <span>85%</span></h2>
              <img src={line} alt="" />
          </Skilleft>
          <SkilRight>
             <h1>Language skills</h1>
              <h2>Uzbek <span>85%</span></h2>
              <img src={line} alt="" />
              <h2>Russian <span>85%</span></h2>
              <img src={line} alt="" />
              <h2>English <span>85%</span></h2>
              <img src={line} alt="" />
          </SkilRight>
        </Skillscon>
        <Portfolio/>
     </Maincon>
  )
}

export default AboutPage
