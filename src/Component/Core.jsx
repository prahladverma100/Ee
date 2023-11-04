import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import cloud_bottom from '../assets/image/Cloud-bottom.png'
import A from '../assets/image/A.png'
import Slider from 'react-slick';
import { Card_svg } from './Icon'

const Core = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='bg_core min-vh-100 pb-5  position-relative  pt-0 pt-sm-4 pt-md-5'>

      <div className='ab w-100 '>
        <img className='w-100' src={cloud_bottom} alt="" />
      </div>
      <Container className='pb-5 mb-5 custom_container '>
        <h3 className='text-white fw-bold ff_michna fs_lg  d-flex justify-content-center pt-5'>Core Strategies</h3>
        <div className='d-flex justify-content-center text-center'>
          <p className=' fw-bold text_greay ff_Raleway  fs_xs pb-4  max_width'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
        </div>
        <Slider {...settings}>
          <Row className='d-flex align-items-center '>
            <Col lg={6} className='d-flex align-items-center justify-content-center position-relativevhight_500' data-aos="fade-right">
              <h4 className='sample_font fw-bold pos_ab'>$AMPL</h4>
              <div className='card1 px-4 pt-3 pb-3'>
                <button className='card_btn mb-4'>Innovation</button>
                <div className='d-flex justify-content-center'>
                  <div className='circil d-flex justify-content-center align-items-center '>
                    <img src={A} alt="" />

                  </div>

                </div>
                <div className='d-flex justify-content-between pt-4'>
                  <p className=' fw-normal fs_xs ff_Raleway text_greay'>Projected Yield (APY)</p>
                  <p className='ff_inter fs_xs fw-bold text_color'>7,777,777%</p>
                </div> <div className='d-flex justify-content-between'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay mb-2'>Current Deposits</p>
                  <p className='fw-medium fs_xs ff_inter text-white mb-2'>0.00 AMPL</p>

                </div>
                <div className='card_line'>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay'>Max Capacity</p>
                  <p className='fw-medium fs_xs ff_inter text-white'>0.00 AMPL</p>
                </div>

              </div>
            </Col>
            <Col lg={6} className='pt-5 p-lg-0' data-aos="fade-left">
              <div>
                <h5 className=' text-white ff_michna fw-normal fs_md valut_font'>Elastic Vault</h5>

                <div className='d-flex align-items-center'>
                  <p className=' fw-medium text-white mb-2 pe-1'>Deposit Token</p>
                  <Card_svg />
                </div>
                <p className=' fw-normal ff_Raleway text_greay fs_xs'> $AMPL</p>
                <h4 className=' fw-medium text-white pb-2 ff_Raleway'>Flagship Hedging Strategy</h4>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs  pb-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
              </div>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col lg={6} className='d-flex align-items-center justify-content-center position-relative'>
              <h4 className='sample_font fw-bold pos_ab'>$AMPL</h4>
              <div className='card1 px-4 pt-3 pb-3'>
                <button className='card_btn mb-4'>Innovation</button>
                <div className='d-flex justify-content-center'>
                  <div className='circil d-flex justify-content-center align-items-center '>
                    <img src={A} alt="" />

                  </div>

                </div>
                <div className='d-flex justify-content-between pt-4'>
                  <p className=' fw-normal fs_xs ff_Raleway text_greay'>Projected Yield (APY)</p>
                  <p className='ff_inter fs_xs fw-bold text_color'>7,777,777%</p>
                </div> <div className='d-flex justify-content-between'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay mb-2'>Current Deposits</p>
                  <p className='fw-medium fs_xs ff_inter text-white mb-2'>0.00 AMPL</p>

                </div>
                <div className='card_line'>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay'>Max Capacity</p>
                  <p className='fw-medium fs_xs ff_inter text-white'>0.00 AMPL</p>
                </div>

              </div>
            </Col>
            <Col lg={6} className='pt-5 p-lg-0'>
              <div>
                <h5 className=' text-white ff_michna fw-normal fs_md valut_font'>Elastic Vault</h5>
                <p className=' fw-medium text-white'>Deposit Token</p>
                <p className=' fw-normal ff_Raleway text_greay fs_xs'> $AMPL</p>
                <h4 className=' fw-medium text-white pb-2 ff_Raleway'>Flagship Hedging Strategy</h4>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs  pb-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
              </div>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col lg={6} className='d-flex align-items-center justify-content-center position-relativevhight_500'>
              <h4 className='sample_font fw-bold pos_ab'>$AMPL</h4>
              <div className='card1 px-4 pt-3 pb-3'>
                <button className='card_btn mb-4'>Innovation</button>
                <div className='d-flex justify-content-center'>
                  <div className='circil d-flex justify-content-center align-items-center '>
                    <img src={A} alt="" />

                  </div>

                </div>
                <div className='d-flex justify-content-between pt-4'>
                  <p className=' fw-normal fs_xs ff_Raleway text_greay'>Projected Yield (APY)</p>
                  <p className='ff_inter fs_xs fw-bold text_color'>7,777,777%</p>
                </div> <div className='d-flex justify-content-between'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay mb-2'>Current Deposits</p>
                  <p className='fw-medium fs_xs ff_inter text-white mb-2'>0.00 AMPL</p>

                </div>
                <div className='card_line'>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay'>Max Capacity</p>
                  <p className='fw-medium fs_xs ff_inter text-white'>0.00 AMPL</p>
                </div>

              </div>
            </Col>
            <Col lg={6} className='pt-5 p-lg-0'>
              <div>
                <h5 className=' text-white ff_michna fw-normal fs_md valut_font'>Elastic Vault</h5>
                <p className=' fw-medium text-white'>Deposit Token</p>
                <p className=' fw-normal ff_Raleway text_greay fs_xs'> $AMPL</p>
                <h4 className=' fw-medium text-white pb-2 ff_Raleway'>Flagship Hedging Strategy</h4>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs  pb-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
              </div>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col lg={6} className='d-flex align-items-center justify-content-center position-relative'>
              <h4 className='sample_font fw-bold pos_ab'>$AMPL</h4>
              <div className='card1 px-4 pt-3 pb-3'>
                <button className='card_btn mb-4'>Innovation</button>
                <div className='d-flex justify-content-center'>
                  <div className='circil d-flex justify-content-center align-items-center '>
                    <img src={A} alt="" />

                  </div>

                </div>
                <div className='d-flex justify-content-between pt-4'>
                  <p className=' fw-normal fs_xs ff_Raleway text_greay'>Projected Yield (APY)</p>
                  <p className='ff_inter fs_xs fw-bold text_color'>7,777,777%</p>
                </div> <div className='d-flex justify-content-between'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay mb-2'>Current Deposits</p>
                  <p className='fw-medium fs_xs ff_inter text-white mb-2'>0.00 AMPL</p>

                </div>
                <div className='card_line'>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                  <p className='fw-normal fs_xs ff_Raleway text_greay'>Max Capacity</p>
                  <p className='fw-medium fs_xs ff_inter text-white'>0.00 AMPL</p>
                </div>

              </div>
            </Col>
            <Col lg={6} className='pt-5 p-lg-0'>
              <div>
                <h5 className=' text-white ff_michna fw-normal fs_md valut_font'>Elastic Vault</h5>
                <p className=' fw-medium text-white'>Deposit Token</p>
                <p className=' fw-normal ff_Raleway text_greay fs_xs'> $AMPL</p>
                <h4 className=' fw-medium text-white pb-2 ff_Raleway'>Flagship Hedging Strategy</h4>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs  pb-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                <p className=' fw-normal  ff_Raleway text_greay fs_xs'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
              </div>
            </Col>
          </Row>
        </Slider>
      </Container>
    </div>
  )
}

export default Core