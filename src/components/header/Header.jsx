import './header.scss'
import {Link} from 'react-router-dom'
import my from '../../assets/my.jpg'
import { useContext } from 'react'
import { MyContext } from '../../App'
import logo from '../../assets/logo.png'
export default function Header() {
       const value = useContext(MyContext)
       console.log(value)
       return (
              <div className="header">
                 <div className="header1">
                 <img src={logo} alt="" />
                        <div className="inputSearch">
                            <span>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input type="text"
                             placeholder="Search photos" 
                             name="name"
                             onChange={value.getValue}
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
                     <div className="headerInfo">
                            <div className="infoTitle">
                            <Link to='./advertise' style={{textDecoration:"none"}}>
                                   <span>Advertise</span>
                            </Link>
                            <Link to='./blog' style={{textDecoration:"none"}}>
                                   <span>Blog</span>
                            </Link>
                                  <button>
                                         Submit a photo
                                  </button>
                            </div>
                            <div className="infoImage">
                                   <img src={my} alt="" />
                            </div>
                            <div className="settings" onClick={()=>value.setResOpen(!value.resOpen)}>
                            <i class="fa-solid fa-bars"></i>
                            </div>
                     </div>
                 </div>
                 <div className="header2">
                        <div className="editor">
                        <Link to='/' style={{textDecoration:"none"}}>
                            <span className="active">Editorial</span>
                        </Link>
                        <Link to='./follow' style={{textDecoration:"none"}}>
                            <span>Following</span>
                        </Link>
                        </div>
                        <div className="line"></div>
                        <div className="called">
                        <Link to='/wallpaper' style={{textDecoration:"none"}}>
                        <span>Wallpapers</span>
                        </Link>
                        <Link to='./renders' style={{textDecoration:"none"}}>
                               <span>3D Renders</span>
                        </Link>
                        <Link to='./architecture' style={{textDecoration:"none"}}>
                               <span>Architecture</span>
                        </Link>
                        <Link to='./events' style={{textDecoration:"none"}}>
                               <span>Current Events</span>
                        </Link>
                        <Link to='./nature' style={{textDecoration:"none"}}>
                               <span>Nature</span>
                        </Link>
                        <Link to='./fashion' style={{textDecoration:"none"}}>
                               <span>Fashion</span>
                        </Link>
                        <Link to='./textures' style={{textDecoration:"none"}}>
                               <span>Textures & Patterns</span>
                        </Link>
                        <Link to='./food' style={{textDecoration:"none"}} >
                               <span>Food & Drink</span>
                        </Link>
                        <Link to='./people' style={{textDecoration:"none"}}>
                               <span>People</span>
                        </Link>
                        <Link to='./health'  style={{textDecoration:"none"}}>
                               <span>Health & Wellness</span>
                        </Link>
                        </div>
                 </div>
                
              </div>
       )
}
