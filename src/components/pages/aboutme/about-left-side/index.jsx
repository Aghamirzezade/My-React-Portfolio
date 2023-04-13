import './index.css'
import { useState } from 'react'

const Index = () => {
  const [isHover,setIsHover] = useState(false)
  const handleOnMouse = () => {
    setIsHover(true);
  }
  const handleOffMouse = ()=> {
    setIsHover(false);
  }
  const myStyle = {
    width: isHover ? '32.5vw': '0'
  }
  return (
    <div>

        <div onMouseEnter={handleOnMouse} onMouseLeave={handleOffMouse} className='aboutPicText'>
        My Skills
          </div>
          <div style={myStyle} className='leftSideImg'>
        </div>
    </div>
  )
}

export default Index