import React from 'react'
import { Container } from 'react-bootstrap'

const Content_us = () => {
    return (
        <div className=' bg-content pb-5'>
            <Container className=' custom_container'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h5 className=' ff_michna fs_lg fw-bold text-white pt-5 d-flex justify-content-center '>Contact Us</h5>
                    <p className='d-flex justify-content-center ff_Raleway fs_xs fw-normal text_greay pt-1'>Have a question or want to contribute? Reach out to us.</p>
                </div>
                <div className='d-flex justify-content-center flex-column '>
                    <div className='d-flex justify-content-center gap-5'>
                        <input type="text " placeholder='First Name' className=' outline' data-aos="fade-right" />
                        <input type="text " placeholder='Last Name' className='outline' data-aos="fade-left" />
                    </div>
                    <div className='pt-4 d-flex justify-content-center gap-5'>
                        <input type="text " placeholder='Email' className='outline' data-aos="fade-right" />
                        <input type=" number " placeholder='Phone Number' className='outline' data-aos="fade-left" />

                    </div>
                    <div className='pt-5 d-flex justify-content-center'>
                        <input type="text " placeholder='Massage' className='outline pb ' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000" />

                    </div>


                </div>
                <div className='d-flex justify-content-center pt-5 mt-5' data-aos="fade-up"
                    data-aos-duration="3000">
                    <button className='submit_btn ff_Raleway fw-medium fs_20 text-white'>SUBMIT</button>
                </div>
            </Container>
        </div>
    )
}

export default Content_us