import React from 'react'
import { Container } from 'react-bootstrap'

const Section5 = () => {
    return (
        <div className='section5_img pb-5  pt-0 pt-md-5'>
            <Container className='custom_container'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h3 className=' fw-bold text-white fs_xl ff_jakarta d-flex justify-content-center pt-5'>170k Total Starting Supply</h3>
                    <p className=' fw-medium fs_xs ff_Raleway text-white d-flex justify-content-center pb-5'>Initial BONDing Offering (IBO)* Phases</p>
                </div>
                <div className='d-flex justify-content-center pb-4'>
                    <div className=' max-width1 '>
                        <div className='d-flex justify-content-between align-items-center  position-relative line1' data-aos="fade-right">
                            <p className='text-white ff_Raleway fs_sm fw-normal text-uppercase round_font'>Round1 </p>
                            <p className='text-white ff_Raleway fs_20 fw-medium round_font text-uppercase'>10,000 EEFI Bonds</p>
                            <p className='fs_sm ff_Raleway round_font fw-normal'>@ <span className='fs_36 ff_Raleway round_font fw-normal'>$12</span></p>
                        </div>
                        <p className='text-white justify-content-end  d-flex ff_jakarta fs_xs fw-normal numeric font_italic'>Vested (locked) for 1 Year</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center pb-4' data-aos="fade-left">
                    <div className=' max-width1 '>
                        <div className='d-flex justify-content-between align-items-center  position-relative line1'>
                            <p className='text-white ff_Raleway fs_sm fw-normal text-uppercase round_font'>Round1 </p>
                            <p className='text-white ff_Raleway fs_20 fw-medium round_font text-uppercase'>10,000 EEFI Bonds</p>
                            <p className='fs_sm ff_Raleway round_font fw-normal'>@ <span className='fs_36 ff_Raleway round_font fw-normal'>$18</span></p>
                        </div>
                        <p className='text-white justify-content-end  d-flex  d-flex ff_jakarta fs_xs fw-normal numeric font_italic'>Vested (locked) for six months</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className=' max-width1 ' data-aos="fade-right">
                        <div className='d-flex justify-content-between align-items-center  position-relative line1'>
                            <p className='text-white ff_Raleway fs_sm fw-normal text-uppercase round_font'>Round1 </p>
                            <p className='text-white ff_Raleway fs_20 fw-medium round_font text-uppercase'>10,000 EEFI Bonds</p>
                            <p className='fs_sm ff_Raleway round_font fw-normal'>@ <span className='fs_36 ff_Raleway round_font fw-normal'>$26</span></p>
                        </div>
                        <p className='text-white justify-content-end lining-nums d-flex  d-flex ff_jakarta fs_xs fw-normal numeric font_italic'>No vesting or lock up periods. Available at launch.</p>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <p className='text-white fs_20 text-decoration-underline fw-normal align-items-center ff_Raleway d-flex justify-content-center pt-5'>(47,777 or around  <span className='round_font fs_36 text-decoration-underline  d-flex align-items-center px-2'>28% </span>  of total starting supply is up for IBO)</p>
                    <div className=' text-center d-flex justify-content-center'>
                        <p className='fs_xsm  ff_Raleway fw-normal text_greay  text_width'>Individuals who hold $EEFI will also receive an airdrop of the protocol's governance token $EFT ...learn more</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section5 