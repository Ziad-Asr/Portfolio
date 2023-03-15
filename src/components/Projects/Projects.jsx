import {FiGithub} from 'react-icons/fi'
import FoodApp from '../../assests/FoodApp-image.jpg'
import NFT from '../../assests/NFT-Image.jpg'
import weather from '../../assests/weather.jpg'
import Todo from '../../assests/Todo-image.jpg'

import './Projects.scss'

const data = [
  {
    id: 1,
    image: FoodApp,
    liveLink: 'https://ziad-food-app.netlify.app',
    github: 'https://github.com/Ziad-Asr/Food-App',
    title: 'Food App',
    desc: 'This is a food delivary app for fast food.',
    tech1: 'React',
    tech2: 'Javascript',
    tech3: 'scss',
  },
  {
    id: 2,
    image: Todo,
    liveLink: 'https://ziad-todos.netlify.app/',
    github: 'https://github.com/Ziad-Asr/Todo-list',
    title: 'Todo list',
    desc: 'Todo list for daily tasks.',
    tech1: 'React',
    tech2: 'Javascript',
    tech3: 'scss',
  },
  {
    id: 4,
    image: NFT,
    liveLink: 'https://ziad-nft-store.netlify.app',
    github: 'https://github.com/Ziad-Asr/NFT-Store',
    title: 'NFT Store',
    desc: 'NFT  Store for unique images',
    tech1: 'React',
    tech2: 'Javascript',
    tech3: 'scss',
  },
  {
    id: 3,
    image: weather,
    liveLink: 'https://ziad-weather-app.netlify.app/',
    github: 'https://github.com/Ziad-Asr/Weather-App',
    title: 'Weather App',
    desc: 'Weather app for all countries.',
    tech1: 'React',
    tech2: 'Javascript',
    tech3: 'scss',
  },
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div class="sectionTitle">
        <span class="titleNumber">03 . </span>  
        <h5 class="titleText">Projects <div class="underline"><span></span></div></h5>
      </div>

      <div className="projectContainer grid"> 
          { 
          data.map(({id, github, image, liveLink, desc, title, tech1, tech2, tech3}) =>{
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="githubIcon">
                  <a href={github} rel="noreferrer noopener" target="_blank"><FiGithub className="icon"/></a>
                </div>
              </div>
              
             <div className="imgDiv">
              <a href={liveLink} rel="noreferrer noopener" target="_blank">
              <img src={image} alt={title} /> 
              </a>
             </div>

             <div className="projectTitle">
              <h3>{title}</h3>
             </div>

             <div className="desc">
              {desc}
             </div>

             <div className="technologies flex">
                <small> {tech1} </small>
                <small> {tech2} </small>
                <small> {tech3} </small>                
             </div>
             
             </div>
            )

           })
           }
      </div>

    </section>
  )
}

export default Project
