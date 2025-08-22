import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Tharuni</h3>
                            <span>GH Academy, Nandyal</span>
                        </div>
                    </div>
                    <p>I had a great learning experience at GH Academy. The trainers explained every concept step by step and made sure we understood the basics before moving ahead. The projects and assignments gave me practical knowledge that I can now apply in real situations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Krishna Sai</h3>
                            <span>GH Academy, Nandyal</span>
                        </div>
                    </div>
                    <p>I joined GH Academy with zero coding knowledge, but now I can build websites and understand data analysis. The structured course and friendly environment made learning easy.I feel industry-ready because of the strong foundation I got here.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Bindu</h3>
                            <span>GH Academy, Nandyal</span>
                        </div>
                    </div>
                    <p>GH Academy gave me not only knowledge but also the confidence to use it in real life. The trainers were very supportive and gave personal attention whenever we faced difficulties. The learning environment was friendly, and motivated us to do our best.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Santhosh</h3>
                            <span>GH Academy, Nandyal</span>
                        </div>
                    </div>
                    <p>I am really happy with the training at GH Academy. The course material was updated, and the labs had everything we needed to practice. The mentors guided us patiently and helped us focus on practical applications rather than just theory.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
