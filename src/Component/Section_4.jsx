import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icon1s } from './Icon'
import { Icon2 } from './Icon'
import { Icon3 } from './Icon'
import { Icon4 } from './Icon'
import { Icon5 } from './Icon'

const Section_4 = () => {
  return (
    <>

      <div className=' position-relative min-vh-100 overflow-hidden'>
        <div className=''>
          <Row className=' justify-content-between '>

            <Col lg={6} className='px-2 px-sm-4 px-md-5 pt-0 pb-5 token1 pt-sm-5' data-aos="fade-right">

              <div className='px-3 px-sm-3 px-md-5 pt-5'>
                <h5 className='fw-bold token_font pt-5 '>EEFI Tokenomics</h5>
                <p className='fs_xs fw-normal ff_Raleway mx_width2'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                <button className='fs_xs fw-medium blue contract-btn text-white ff_Raleway mt-4 mb-5 cursor-pointer'>View Contract Address</button>
                <h6 className='fs_24 fw-bold ff_michna pb-3'>IBO TOKENOMICS</h6>
                <p className='fs_sm fw-bold ff_Raleway mb-2'>IBO Round 1 Price</p>
                <p className='fs_xsm fw-semibold ff_Raleway text_color'>1 EEFI = $12</p>
                <p className='fs_sm fw-bold ff_Raleway mb-2'>IBO Round 2 Price</p>
                <p className='fs_xsm fw-semibold ff_Raleway text_color'>1 EEFI = $18</p>
                <p className='fs_sm fw-bold ff_Raleway mb-2'>IBO Round 3 Price</p>
                <p className='fs_xsm fw-semibold ff_Raleway text_color'>1 EEFI = $26</p>
                <p className='fs_sm fw-bold ff_Raleway mb-2'>TOTAL SUPPLY</p>
                <p className='fs_xsm fw-semibold ff_Raleway text_color mb-0'>170,000</p>
              </div>
            </Col>


            <Col lg={6} className='tockenmice px-2 px-sm-4 px-md-5 min-vh-100 pt-5 pb-5' data-aos="fade-left">

              <div className='px-3 px-sm-3 px-md-5 pt-5'>
                <div className='d-flex align-items-center pt-5'>
                  <div>
                    <Icon1s />
                  </div>
                  <div>
                    <h3 className='fs_24 fw-bold ff_michna text-white'>Decentralized Yield</h3>
                    <p className='text_color1 fw-normal fs_xs ff_Raleway'>Protocol’s native utility | rewards token</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <Icon2 />
                  </div>
                  <div>
                    <h3 className='fs_24 fw-bold ff_michna text-white'>Extra Value</h3>
                    <p className='text_color1 fw-normal fs_xs ff_Raleway'>Can be highly deflationary during market uptrends</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <Icon3 />
                  </div>
                  <div>
                    <h3 className='fs_24 fw-bold ff_michna text-white'>Smart Index</h3>
                    <p className='text_color1 fw-normal fs_xs ff_Raleway'>Token can be viewed as an index of all strategy performance on the protocol</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <Icon4 />
                  </div>
                  <div>
                    <h3 className='fs_24 fw-bold ff_michna text-white'>Expansive Utility Dimensions</h3>
                    <p className='text_color1 fw-normal fs_xs ff_Raleway'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <Icon5 />
                  </div>
                  <div>
                    <h3 className='fs_24 fw-bold ff_michna text-white'>Expansive Utility Dimensions</h3>
                    <p className='text_color1 fw-normal fs_xs ff_Raleway'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
                  </div>
                </div>
              </div>

            </Col>

          </Row>
        </div>
      </div >

    </>
  )
};

export default Section_4