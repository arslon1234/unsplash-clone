import './wallpaper.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../header/Header';
import { Carousel, Item ,Caption } from 'bootstrap';
export default function Walpaper() {
       const value = useContext(MyContext)
       return (
              <>
         <Header/>
              <div className="imgItem">
              <div className="ItemHeader">
                <div className="desc">
                  <h2>Wallpapers</h2>
                  <span>To celebrate Dell XPS’s amazing Black Friday deals on select laptops, they</span>
                  <span>are taking over the Wallpapers topic. From epic drone shots to inspiring</span>
                  <span>moments in nature — submit your best computer backgrounds for a chance</span>
                  <span>to win a new XPS laptop.</span>
                  <p>Curated by Dell XPS. Learn more about this topic takeover
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
                    <span>Placitas, New Mexico</span>
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
                    <span><b>8.7k</b></span>
                    </div>
                    <div className="Item2">
                    <p>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Top Contributions</span>
                    </p>
                    <span>{
                      value.result2.map((images, id)=>(
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
                    <button>Submit to Wallpapers</button>
                  </div>
                </div>
              </div>

                    <SRLWrapper>
<div className="formSection">
 
   <div className="result2">
     {
       value.result2.map((image, id)=>(
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
