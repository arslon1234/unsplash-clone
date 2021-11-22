import './renders.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../header/Header';
export default function Renders() {
       const value = useContext(MyContext)
       return (
              <>
         <Header/>
              <div className="imgItem">
              <div className="ItemHeader">
                <div className="desc">
                  <h2>3D Renders</h2>
                  <span>For the first time ever, Unsplash is accepting a new category of images</span>
                  <span>outside of photography. Submit your 3-dimensional images, designed in the</span>
                  <span>software of your choice, rendered into JPEG images.</span>
                  <p>Learn more
                    <a href="">here</a>
                  </p>
                </div>
                <div className="title">
                  <div className="titleItem">
                    <div className="Item1">
                    <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Location</span>
                    </p>
                    <span>Hannover, Germany</span>
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
                    <span><b>962</b></span>
                    </div>
                    <div className="Item2">
                    <p>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Top Contributions</span>
                    </p>
                    <span>{
                      value.result3.map((images, id)=>(
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
                    <button>Submit to 3D Renders</button>
                  </div>
                </div>
              </div>

                    <SRLWrapper>
<div className="formSection">
 
   <div className="result3">
     {
       value.result3.map((image, id)=>(
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
