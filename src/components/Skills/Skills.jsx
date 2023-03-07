import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'

import './Skills.scss'

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
       <div class="sectionTitle">
      <span class="titleNumber">02 . </span>  
      <h5 class="titleText">
        Skills 
        <div class="underline">
          <span></span>
        </div>
      </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">1) Web Development</h2>
          </div>
          <div className="generalSkills">
          <div className="singleSkill">
           <div className="iconBox flex">
            <FaHtml5 className='icon'/>
            </div>
            <span className='skillName'>HTML</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <SiCss3 className='icon'/>
            </div>
            <span className='skillName'>CSS</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <FaBootstrap className='icon'/>
            </div>
            <span className='skillName'>Bootstrap</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoSass className='icon'/>
            </div>
            <span className='skillName'>Sass</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoJavascript className='icon'/>
            </div>
            <span className='skillName'>JavaScript</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <TbBrandReactNative className='icon'/>
            </div>
            <span className='skillName'>React</span>
           </div>
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">2) Other Skills</h2>
          </div>
          <div className="generalSkills">
           <div className="singleSkill">
            <div className="iconBox flex">
            <FaGitSquare className='icon'/>
            </div>
            <span className='skillName'>Git</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <AiOutlineGithub className='icon'/>
            </div>
            <span className='skillName'>Github</span>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills