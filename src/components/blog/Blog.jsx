import './blog.scss'
import BlogHeader from '../blogHeader/BlogHeader'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import Announ from '../announcement/Announ'
export default function Blog() {
       return (
              <>
              <BlogHeader/>
              <Home/>
              </>
       )
}
