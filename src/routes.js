import About from './components/pages/aboutme/index'
import Home from './components/pages/mainpage/index'
import Archive from './components/pages/archive/index'

const routeItem =(title ,path ,component) =>{
    return {
        title,
        path ,
        component ,
    }
}

const routes ={
    home : routeItem('Main Page', '/' , Home),
    about : routeItem('About Me', '/about', About),
    archive : routeItem('Archive' , '/archive', Archive)
}
const routesArray = Object.values(routes)

export {routes, routesArray}