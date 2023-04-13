import './index.css'
import LeftSide from './about-left-side/index'
import RightSide from './about-right-side/index'
import Content from './about-content/index'
import Footer from './about-footer/index'






const About = () => {
  return (
    <div>
      <Footer/>
      <div className='aboutMeContent'>
        <LeftSide/>
        <Content/>
        <RightSide/>

      </div>
    </div>
    )
}

export default About;