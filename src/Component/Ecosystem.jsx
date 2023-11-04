import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Orelay } from './Icon'
import { Bond } from './Icon'
import { Fjord } from './Icon'
import { Balancer } from './Icon'
import { Gearbox } from './Icon'
import { Uniswap } from './Icon'
import Davoice from '../assets/image/davoice.png'
import { Discord1 } from './Icon'
import { Tiwtter1 } from './Icon'
import { In } from './Icon'
import line2 from '../assets/image/Line2.png'
import solomon from '../assets/image/solomon.png'
import anton from '../assets/image/anton.png'

const Ecosystem = () => {
    return (
        <div className=' min-vh-100'>
            <Container className='trasform12 custom_container   '>

                <div className='d-flex justify-content-center'>
                    <Row className='d-flex mx_width1 pt-3 justify-content-center  mx_width1 '>
                        <Col md={6} lg={4} className='pb-3' data-aos="fade-right">
                            <div className='box_1 cursor_pointer'>
                                <img className='w-100' src={Davoice} alt="" />
                                <p className='d-flex justify-content-center mb-0 fs_24 fw-medium ff_Raleway'>Davoice</p>
                                <p className='d-flex justify-content-center fs_xs fw-normal text-black ff_Raleway'>co-founder</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Discord1 />
                                    <img className='px-3' src={line2} alt="" />
                                    <Tiwtter1 />
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='pb-3 ' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className='box_1 cursor_pointer'>
                                <img className='w-100' src={solomon} alt="" />
                                <p className='d-flex justify-content-center mb-0 fs_24 fw-medium ff_Raleway'>Solomon Adekale</p>
                                <p className='d-flex justify-content-center fs_xs fw-normal text-black ff_Raleway'>co-founder</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Discord1 />
                                    <img className='px-3' src={line2} alt="" />
                                    <Tiwtter1 />
                                    <img className='px-3' src={line2} alt="" />
                                    <In />
                                </div>
                            </div>

                        </Col>
                        <Col md={6} lg={4} className='pb-3' data-aos="fade-left">
                            <div className='box_1 cursor_pointer'>
                                <img className='w-100' src={anton} alt="" />

                                <p className='d-flex justify-content-center mb-0 fs_24 fw-medium ff_Raleway'>Anton</p>
                                <p className='d-flex justify-content-center fs_xs fw-normal text-black ff_Raleway'>Co-Founder | Lead Developer</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Discord1 />
                                    <img className='px-3' src={line2} alt="" />
                                    <Tiwtter1 />
                                    <img className='px-3' src={line2} alt="" />
                                    <In />

                                </div>
                            </div>


                        </Col>
                        <h4 className=' fw-bold fs_lg ff_michna text_color d-flex justify-content-center pb-md-5 mt-5 pt-5 pb-3' data-aos="fade-down">Ecosystem Partners</h4>

                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0 ' data-aos="fade-right">
                            <div className='svg_box cursor_pointer text-center d-flex justify-content-center align-items-center'>
                                <span className='btn_hov'>  <Orelay /></span>
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0'>
                            <div className='svg_box cursor_pointer d-flex justify-content-center align-items-center'>
                                <Bond />
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0' data-aos="fade-left">
                            <div className='svg_box cursor_pointer d-flex justify-content-center align-items-center'>
                                <Fjord />
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0' data-aos="fade-right">
                            <div className='svg_box cursor_pointer d-flex justify-content-center align-items-center'>
                                <Balancer />
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0'>
                            <div className='svg_box cursor_pointer d-flex justify-content-center align-items-center'>
                                <Gearbox />
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='d-flex justify-content-center pb-4 pt-2 pt-md-0' data-aos="fade-left">
                            <div className='svg_box cursor_pointer d-flex justify-content-center align-items-center'>
                                <Uniswap />
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className='d-flex justify-content-center mt-3 mt-lg-5' data-aos="fade-up">
                    <button className='announced_btn  fw-semibold fs_xs ff_Raleway'>More To Be Announced</button>
                </div>
            </Container >
        </div>
    )
}

export default Ecosystem