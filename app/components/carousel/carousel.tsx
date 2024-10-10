import React from 'react';
import { Carousel } from 'antd';
import Icon from '../Icon/Icon';
import styles from './carousel.module.scss'
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel1: React.FC = () => (
    <Carousel autoplay>
    <div className="photo">
      <img src="https://cdn.discordapp.com/icons/1215005102469816368/8a45ac831024aa0fad9222094abe9f4f.webp?size=240" alt="Slide 1" style={{ width: '100%', height: '270px', objectFit: 'cover' }} />
    </div>
    <div className="photo">
      <img src="../../../public/Icons/move2.svg" alt="Slide 2" style={{ width: '100%', height: '270px', objectFit: 'cover' }} />
    </div>
    <div className="photo">
      <img src="../../../public/Icons/move3.svg" alt="Slide 3" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
    </div>
    <div className="photo">
      <img src="../../../public/Icons/move4.svg" alt="Slide 4" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
    </div>
  </Carousel>
);

export default Carousel1;