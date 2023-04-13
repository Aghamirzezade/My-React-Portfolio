import {useState} from 'react'
import './index.css'

//Route
import { Link } from "react-router-dom";
import {route , routesArray} from './../../../../routes'


const Index = () => {
const [isHovering , setIsHovering] = useState(false)
const handleOnEmail =() =>{
  setIsHovering(true)
} 
const handleOffEmail =() =>{
  setIsHovering(false)
} 
const myEmailStyle ={
  opacity : isHovering ? '1' : '0',
  width : isHovering ? '100%' : '0'
}

  return (
    <div className='myNaving'>
    <div className='myName'>Boyukagha Mirzazada</div>

    <div>



        <ul>

        {routesArray.map((item, i) => (
            <li className='navLink' key={i}>
              {" "}
              <Link className='navLink' to={item.path}>{item.title}</Link>
            </li>
          ))}

        <ul className='headerEmailSection'>
            <li onMouseEnter={handleOnEmail} onMouseLeave={handleOffEmail} className='emailMe'>Email Me</li>

            <li style={myEmailStyle} className='myEmail'>aghamirzezade9@gmail.com</li>
        </ul>
        </ul>
    </div>
    </div>
  )
}

export default Index