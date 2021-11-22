import './architecture.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../header/Header';
export default function Advertise() {
       const value = useContext(MyContext)
       return (
              <>
         <Header/>
              <div className="imgItem">
              <div className="ItemHeader">
                <div className="desc">
                  <h2>Architecture</h2>
                  <span>Explore exteriors from around the world — from brutalist buildings to</span>
                  <span>minimalist structures that will give you a new appreciation for the art of</span>
                  <span>architecture.</span>
                </div>
                <div className="title">
                  <div className="titleItem">
                    <div className="Item1">
                    <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Location</span>
                    </p>
                    <span>Ohio, USA</span>
                    </div>
                    <div className="Item1">
                    <p>
                    <i class="fa-solid fa-user"></i>
                    <span>Curator</span>
                    </p>
                    <span>XPS</span>
                    </div>
                    <div className="Item1">
                    <p>
                    <i class="fa-solid fa-file-image"></i>
                    <span>Contributions</span>
                    </p>
                    <span><b>6.8k</b></span>
                    </div>
                    <div className="Item2">
                    <p>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Top Contributions</span>
                    </p>
                    <span>{
                      value.result4.map((images, id)=>(
                        <span className="small" key={images.id}>
                          <a href={images.user.portfolio_url}>
                          <img src={images.user.profile_image.small} alt="" />
                          </a>
                        </span>
                      ))
                    }</span>
                    </div>
                  </div>
                  <div className="titleButton">
                    <button>Submit to Architecture</button>
                  </div>
                </div>
              </div>

                    <SRLWrapper>
<div className="formSection">
 
   <div className="result4">
     {
       value.result4.map((image, id)=>(
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
</div>
</SRLWrapper>
</div>

</>
       )
}
