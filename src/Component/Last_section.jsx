import React from 'react'
import { Container } from 'react-bootstrap'
import footer_img from '../assets/image/footer_img.png'
import { Youtube } from './Icon'
import { Github } from './Icon'
import { Tiwtter } from './Icon'
import { Au } from './Icon'
import { Discord } from './Icon'
import { M } from './Icon'
import { Meassage } from './Icon'
import { Code } from './Icon'
import { Doc } from './Icon'

const Last_section = () => {
    return (
        <div>
            <Container className='custom_container'>
                <div className='d-flex justify-content-center pt-2 pt-lg-5'>
                    <img className='pt-3 pt-lg-5 cursor-pointer mt-0 mt-md-5' src={footer_img} alt="" />

                </div>
                <p className='d-flex justify-content-center fw-normal ff_Raleway fs_xs text_color pb-3 pt-1'>Join Our Community</p>
                <ul className='d-flex justify-content-center gap-3 gap-lg-4 flex-wrap'>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>About</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>IBO Event</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>EEFI Tokenomics</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>Team</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>Roadmap</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>Partners</a></li>
                    <li><a href="" className='fw-normal ff_Raleway fs_xs link_hov'>Contact Us</a></li>
                </ul>
                <div className='d-flex gap-4 justify-content-center flex-wrap pt-3 pb-3 pb-lg-5 mb-3 mb-md-5'>
                    <span className='cursor_pointer svg_hov'> <Youtube /></span>
                    <span className='cursor_pointer svg_hov'><Github /></span>
                    <span className='cursor_pointer svg_hov'>   <Tiwtter /></span>
                    <span className='cursor_pointer svg_hov'><Au /></span>
                    <span className='cursor_pointer svg_hov'><Discord /></span>
                    <span className='cursor_pointer svg_hov'><M /></span>
                    <span className='cursor_pointer svg_hov'><Code /></span>
                    <span className='cursor_pointer svg_hov'><Github /></span>
                    <span className='cursor_pointer svg_hov'><Doc /></span>
                </div>

            </Container>
            <div className='footer_line pt-2 '>
                <Container>
                    <div className='d-flex justify-content-between'>
                        <p className='pt-2 pb-2 fw-normal fs_xsm ff_Raleway'> @Copyright 2023</p>
                        <p className='pb-2 pt-2 fw-normal fs_xsm ff_Raleway'>Privacy policy</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Last_section