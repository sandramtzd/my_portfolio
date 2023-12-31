import React from 'react'
import Logo from '../../assets/favicon.ico'
import CV from '../../assets/Sandra_CV.pdf'
import { Nav, NavContainer, NavLogo, NavItems, MobileIcon, ButtonContainer, MobileMenu } from './NavStyle'
import { FaBars } from "react-icons/fa6";



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a href='#hero'><img src={Logo} alt='hummingbird' style={{width: "100px"}}/></a>
        </NavLogo>
        <MobileIcon><FaBars onClick={() => {setIsOpen(!isOpen);}} /></MobileIcon>

        <NavItems>  
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </NavItems>

        <ButtonContainer>
          <a href={CV} download className='btn' target='_blank' rel="noreferrer">Resume</a>
        </ButtonContainer>


      
      {
        isOpen && (
          <MobileMenu isOpen={isOpen}>
            <a href='#about' onClick={() => {setIsOpen(!isOpen);}} >About</a>
            <a href='#projects' onClick={() => {setIsOpen(!isOpen);}} >Projects</a>
            <a href='#experience' onClick={() => {setIsOpen(!isOpen);}} >Experience</a>
            <a href='#contact' onClick={() => {setIsOpen(!isOpen);}} >Contact</a>
            <a href={CV} download className='btn' target='_blank' rel="noreferrer">Resume</a>
          </MobileMenu>
        )
      }
      </NavContainer>
    </Nav>

  )
}

export default Navbar


