import './body.scss'
import {Switch, Route, Link} from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/Header'
export default function Body() {
       const value = useContext(MyContext)
       return (
              <>
              <Header/>
              <div  className={value.resOpen ? "bodyIcon": "d-none"}></div>
              <div className={value.resOpen ? "resOpen": "d-none"}>
                            <Link to='./advertise' style={{textDecoration:"none"}}>
                                   <span onClick={()=>value.setResOpen(!value.resOpen)}>Advertise</span>
                            </Link>
                            <Link to='./blog' style={{textDecoration:"none"}}>
                                   <span onClick={()=>value.setResOpen(!value.resOpen)}>Blog</span>
                            </Link>
                 </div>
              <div className="body">
                  <div className="bodyItem">
                  <span className="bodyTitle">Unsplash</span>
                  <span className="title2">The internet’s source of <i>freely-usable images.</i></span>
                  <span className="title2">Powered by creators everywhere.</span>
                  <div className="searchInput">
                         <span>
                         <i class="fa-solid fa-magnifying-glass"></i>
                         </span>
                         <input type="text" 
                         name="name"
                         onChange={value.getValue}
                         placeholder="Search free high-resolution photos"
                         />
                         {
                                value.image.length > 0 ?
                                <div className="button">
                             <Link to={'/images'}>
                             <button type="submit" onClick={value.getImage}>Search</button>
                             </Link>
                             </div> : 
                           <div className="button">
                           <Link to="/">
                            <button type="submit" onClick={value.getImage}>Search</button>
                            </Link>
                           </div>
                     }
                        
                  </div>
                  </div>
              </div>
              </>
       )
}
