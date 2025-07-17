import React from 'react'
import { Link } from 'react-scroll';
import './Campus.css'
import gallery_1 from '../../assets/institute4.jpg'
import gallery_2 from '../../assets/institute2.jpg'
import gallery_3 from '../../assets/institute1.jpg'
import gallery_4 from '../../assets/institute3.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to='contact' smooth={true} offset={-260} duration={500}> <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button></Link>
    </div>
  )
}

export default Campus
