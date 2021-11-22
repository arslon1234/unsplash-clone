import './blogHeader.scss'
import logoBlog from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'
export default function BlogHeader() {
       const [openBlog, setOpenBlog] = useState(false)
       return (
              <>
              <div className="blogHeader">
                     <div className="blogHeaderLeft">
                     <Link to='/'>
                            <img src={logoBlog} alt="" />
                     </Link>
                     </div>
                     <div className="blogHeaderCenter">
                            <Link to='./blog' style={{textDecoration:"none"}}>
                                   <span>Home</span>
                            </Link>
                            <Link to='./announ' style={{textDecoration:"none"}}>
                                   <span>Announcements</span>
                            </Link>
                            <Link style={{textDecoration:"none"}}>
                            <Link to='./product' style={{textDecoration:"none"}}>
                                   <span>Product</span>
                            </Link>
                            </Link>
                            <Link to='./brand' style={{textDecoration:"none"}}>
                                   <span>Brands</span>
                            </Link>
                            <Link to='./partner' style={{textDecoration:"none"}}>
                                   <span>Parnerships</span>
                            </Link>
                            <Link to='./community' style={{textDecoration:"none"}}>
                                   <span>Community</span>
                            </Link>
                     </div>
                     <div className="blogHeaderRight">
                            <Link to='./' style={{textDecoration:"none"}}>
                                   <span>
                                   <i>unsplash.com</i>
                                   <i class="fa-solid fa-turn-up"></i>
                                   </span>
                            </Link>
                     </div>
                     <div className="blogBurger" onClick={()=>setOpenBlog(!openBlog)}>
                     <i class="fa-solid fa-bars"></i>
                     </div>
              </div>
              <div className={openBlog ? "openBlog": "d-none"}>
                            <Link to='./blog' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Home</span>
                            </Link>
                            <Link to='./announ' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Announcements</span>
                            </Link>
                            <Link style={{textDecoration:"none"}}>
                            <Link to='./product' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Product</span>
                            </Link>
                            </Link>
                            <Link to='./brand' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Brands</span>
                            </Link>
                            <Link to='./partner' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Parnerships</span>
                            </Link>
                            <Link to='./community' style={{textDecoration:"none"}}>
                                   <span onClick={()=>setOpenBlog(!openBlog)}>Community</span>
                            </Link>
              </div>
              <div className={openBlog ? "openIcon": "d-none"}></div>
              </>
       )
}
