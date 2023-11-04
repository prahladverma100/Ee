import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_section from './Component/Hero_section';
import Bull_section from './Component/Bull_section';
import Core from './Component/Core';
import Section_4 from './Component/Section_4';
import Section5 from './Component/Section5';
import Last_section from './Component/Last_section';
import Strategies from './Component/Strategies';
import Team from './Component/Team';
import Ecosystem from './Component/Ecosystem';
import Roadmap from './Component/Roadmap';
import { Container } from 'react-bootstrap';
import Content_us from './Component/Content_us';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import "aos/dist/aos.css"
import {useEffect} from'react'
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, [])
  return (
    <div className='overflow-hidden'>
      <Hero_section/>
      <Bull_section />
      <Core />
      <Section_4 />
      <Section5 />
      < Strategies />
      <Team /> 
      <Ecosystem />
      <Roadmap />
      <Content_us/>
       <Last_section/>
    </div>
  );
}

export default App;
