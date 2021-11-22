import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SRLWrapper } from 'simple-react-lightbox'
import './home.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'
import BlogFooter from '../blogFooter/BlogFooter'
export default function Home() {
       const value = useContext(MyContext)
       return (
              <div className="home">
                     <div className="homeHeader">
                            <h1>Unsplash Blog</h1>
                            <p>Stories from the community powering the internet’s visuals</p>
                     </div>
                     {/* <h1>Featured</h1> */}
                     {/* <div className="featured">

                            <div className="featuredOne">
                            <SRLWrapper>
           {
             value.result16.map((image, id)=>(
              <div className="cart" key={image.id}>
                <a>
                  <LazyLoadImage
                  className="resultImage"
                  src={image.urls.full}
                  effect="blur"
                  delayTime="300"
                  />
                  <p className="username">
                  <img src={image.user.profile_image.small} alt="" />
                  
                  {image.user.name}</p>
                </a>
              </div>
             ))
           }
                     </SRLWrapper>
                     <div className="homeImgTitle">
                            <p>
                                   <a href="https://unsplash.com/blog/unsplash-library-now-accepts-3d-renders/">Announcements</a>
                            </p>
                            <h2>
                                   <a href="https://unsplash.com/blog/unsplash-library-now-accepts-3d-renders/">
                                   Unsplash Library now accepts <br /> 3D Renders
                                   </a>
                            </h2>
                            <span>
                                   Tanya Santos - October 1,2021
                            </span>
                     </div>
                            </div>
                            <div className="featuredTwo">
                            <SRLWrapper>
           {
             value.result17.map((image, id)=>(
              <div className="cart" key={image.id}>
                <a>
                  <LazyLoadImage
                  className="resultImage"
                  src={image.urls.full}
                  effect="blur"
                  delayTime="300"
                  />
                  <p className="username">
                  <img src={image.user.profile_image.small} alt="" />
                  
                  {image.user.name}</p>
                </a>
              </div>
             ))
           }
                     </SRLWrapper>
                     <div className="homeImgTitle">
                            <p>
                                   <a href="https://unsplash.com/blog/unsplash-awards-2021/">Awards</a>
                            </p>
                            <h2>
                                   <a href="https://unsplash.com/blog/unsplash-awards-2021/">
                                  Unsplash Awards 2021
                                   </a>
                            </h2>
                            <span>
                                 Natalie Brennan - October 1,2021
                            </span>
                     </div>
                            </div>
                     </div> */}
                     <h1>Latest from the team</h1>
                     <div className="Latest">
                            {/* <div className="latestItem"> */}
                            <SRLWrapper>
 
   <div className="result18">
     {
       value.result18.map((image, id)=>(
        <div className="cart" key={image.id}>
          <a>
            <LazyLoadImage
            className="resultImage"
            src={image.urls.full}
            effect="blur"
            delayTime="300"
            />
            <p className="username">
            <img src={image.user.profile_image.small} alt="" />
            
            {image.user.name}</p>
          </a>
        </div>
       ))
     }
</div>
</SRLWrapper>
                     </div> 
                     <Link to='./blog'>
                     <button>Learn more</button>
                     </Link>
                     <div className="homeFooter">
                           <BlogFooter/>
                     </div>
                     </div>
       )
}
