import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import fist_section_img from '../assets/image/fist_section_img.png'
import heroimg from '../assets/image/heroimg.png'
import logo from '../assets/image/logo.png'
import small_robot1 from '../assets/image/small_robot.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MenuIcon } from './Icon'
import { Dropdown1 } from './Icon'

const Hero_section = () => {
  const [menu, setMenu] = useState(false);
  if (menu === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <div className=' bg_img min-vh-100 d-flex flex-column position-relative'>
      <div className='circle position-absolute d-none d-xl-block'> </div>
      <div className='circle1 position-absolute d-none d-xl-block'> </div>
      <div className='circle2 position-absolute d-none d-xl-block'> </div>
      <div className='circle3 position-absolute d-none d-xl-block'> </div>
      <div className='circle4 position-absolute d-none d-xl-block'> </div>

      <Container className=' custom_container'>

        <div className='d-flex justify-content-center justify-content-between align-items-center pt-4'>
          <div className='gap-4 d-flex align-items-center '>
            <img src={logo} alt="logo" className='cursor_pointer' />
          </div>
          <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
            <div className='d-xl-none crossIconset'
              onClick={() => setMenu(false)}>
              <Link><MenuIcon /></Link>
            </div>
            <div className='d-flex gap-lg-3 gap-xl-4 align-items-center ' >
              <NavLink to="/" onClick={() => setMenu(false)} className='fs_xs ff_Raleway fw-medium text-white navlink_hov position-relative  '>Home</NavLink>
              <NavLink to="/solution" onClick={() => setMenu(false)} className='fs_xs ff_Raleway text-white navlink_hov fw-medium position-relative'>Solutions</NavLink>
              <NavLink to="/case" onClick={() => setMenu(false)} className='fs_xs ff_Raleway text-white navlink_hov fw-medium z-1 position-relative'>Cases</NavLink>
              <NavLink to="/aboutus" onClick={() => setMenu(false)} className='fs_xs ff_Raleway text-white navlink_hov fw-medium z-1 position-relative'>About Us</NavLink>
              <NavLink to="/blog" onClick={() => setMenu(false)} className='fs_xs ff_Raleway text-white navlink_hov fw-medium  z-1 position-relative'>Blog</NavLink>
              <NavLink to="/contactus" onClick={() => setMenu(false)} className='fs_xs ff_Raleway text-white navlink_hov fw-medium  position-relative z-1'>Contact Us</NavLink>

              <select id="colorSelect" className=' z-2' >
                <option value="red" className='ff_ralway clr-white fs-16 fw-500 nav-hover list-style'>More</option>
                <option value="blue" className='ff_ralway clr-white fs-16 fw-500 nav-hover list-style'>Partners</option>
                <option value="green" className='ff_ralway clr-white fs-16 fw-500 nav-hover list-style'>Roadmap</option>
                <option value="yellow" className='ff_ralway clr-white fs-16 fw-500 nav-hover list-style'>Team</option>
              </select>

              <button onClick={() => setMenu(false)} className='enter-btn ff_Raleway fs_xs fw-medium text_color d-xl-none d-block'>
                Enter App
              </button>
            </div>
          </div>
          <button onClick={() => setMenu(false)} className='enter-btn ff_Raleway d-none d-xl-block fs_xs fw-medium text_color'>
            Enter App
          </button>

          <div className='d-xl-none d-flex align-items-center gap-2'>
            <Link onClick={() => setMenu(true)}>
              <MenuIcon /></Link>

            <button onClick={() => setMenu(false)} className='enter-btn ff_Raleway fs_xs fw-medium text_color d-xl-none d-block'>
              Enter App
            </button>
          </div>
        </div>
      </Container>

      <Container className='flex-grow-1 d-flex custom_container'>
        <Row>
          <Col xl={6} className='' data-aos="fade-right">
            <h1 className='bulduing-font  text-center text-xl-start pt-5 mt-0 mt-md-5'> BUILDING ELASTIC PROTOCOL</h1>
            <div className='d-flex justify-content-center justify-content-xl-start   text-center text-xl-start '>
              <p className=' fw-normal fs_xs ff_Raleway  text-white max-width'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
            </div>
            <p className='fs_sm fw-bold ff_Raleway text-white text-decoration-underline text-center text-xl-start'>Audited by Omniscia</p>
          </Col>
          <Col xl={6} className=' trasform ' data-aos="fade-left">
            <div className='d-xl-none d-block justify-content-center text-center  mt-5 pt-0 pt-sm-5'>
              <img className='img_width pt-5 mt-0 mt-sm-5' src={small_robot1} alt="" />
            </div>
            <div className='d-none d-xl-block'>
              <img className='w-100' src={fist_section_img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Hero_section