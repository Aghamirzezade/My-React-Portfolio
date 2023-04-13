import { useState } from 'react'
import './index.css'
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
        My Education
          </div>
          <div style={myStyle} className='aboutContentImg'>
        </div>

    </div>
  )
}

export default Index