import React from 'react'
import './footer.css'
import vedio from '../../Assets/vedio.mp4'
import	{FiSend} from 'react-icons/fi'
import	{GiMedicines} from 'react-icons/gi'
import	{AiOutlineTwitter} from 'react-icons/ai'
import	{AiFillYoutube} from 'react-icons/ai'
import	{AiOutlineInstagram} from 'react-icons/ai'
import	{AiFillLinkedin} from 'react-icons/ai'


const footer = () => {
  return (
    <section className='footer'>
      <div className='{/*vedioDiv*/}'>
        <video src={vedio} loop autoPlay muted type="vedio/mp4"></video>
       </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Be with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logoes'>
                <GiMedicines className="icon"/> Medicine
              </a>
            </div>

            <div className='footerParagraph'>
              lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ullam inventore eos 
              fuga hic cum voluptatem minima, tempore
              non odio provident nobis ipsam at,
              doloremque sed cupiditate ipsum in,
              atque soluta?
            </div>

            <div className='footerSocials'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <AiFillLinkedin className='icon'/>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default footer
  