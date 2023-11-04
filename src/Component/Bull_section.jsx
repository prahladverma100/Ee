import React from 'react'
import { Container } from 'react-bootstrap'
import bull_bear_img from '../assets/image/bull_bear_img.png'

const Bull_section = () => {
  return (
    <div className='bull_img'>

      <Container className='min_height d-flex flex-column custom_container'>
        <div>
          <h2 className='bull_font d-flex justify-content-center pb-4' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">Amplify and stretch gains</h2>
        </div>
        <div className='flex-grow-1   d-flex justify-content-center align-items-center text-center'>
          <p className='font2' data-aos="fade-up"
            data-aos-duration="3000">We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
        </div>
      </Container>
    </div>
  )
}

export default Bull_section