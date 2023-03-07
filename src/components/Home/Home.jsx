import {TbArrowBigRightLines} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

import './Home.scss'

const Home = () => {
  return (
    <section id='home' className='home section'>
      
      <div className="leftIcons">
        <div className="socials grid">
            <a href="https://www.linkedin.com/in/ziad-elsayed-0ziad0" rel="noreferrer noopener"  target="_blank"><AiFillLinkedin className="icon" /></a>
            <a href="https://github.com/Ziad-Asr" rel="noreferrer noopener" target="_blank"><AiFillGithub className="icon" /></a>
           <div className="line"></div>
        </div>
      </div>

      <div className="container homeContent">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className="title">
          Ziad Elsayed
        </h1>
        <span className="subTitle">
          I develope scalable web based applications and software.
        </span>
        <p className="homeParagraph">
        I code within required coding standards and styles to serve the exact need.
        </p>

        <div className="lowerHomeSection">
          <button className='contactBtn '>
            <a className='flex'  href="#contact">
            Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div class="scrollDiv">
              <a href="#about" className='flex'> <h6 class="scroll">Scroll Down <TbChevronsDown className='icon'/></h6></a>   
           </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="https://mailto:ZiadElsayedAsr@gmail.com" rel="noreferrer noopener" target="_blank">ZiadElsayedAsr@gmail.com</a>
          </div>
           <div className="line"></div>
        </div>
      </div>

    </section>
  )
}

export default Home