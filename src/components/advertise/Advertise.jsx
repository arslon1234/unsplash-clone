import './advertise.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../assets/logo.png'
import home from '../../assets/home1.png'
import { Link } from 'react-router-dom';
export default function Advertise() {
       const value = useContext(MyContext)
       return (
              <>
              <div className="imgItem">
              <div className="itemHeader">
                <div className="headerTop">
                <Link to='./'>
                    <img src={logo} alt="" />
                </Link>
                    <button>
                      <a href="#info">Get in touch</a>
                    </button>
                </div>
                <div className="headerDown">
                  <h1>Advertise on Unsplash</h1>
                  <p>The world’s most popular creative platforms are engaging with Unsplash’s creators.</p>
                </div>
              </div>
                    <SRLWrapper>
    <div className="formSection">
    <div className="result12">
     {
       value.result12.map((image, id)=>(
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
  <div className="Direct">
   <div className="directItem">
   <p>
    <i class="fa-solid fa-right-long"></i>
    <span>Direct advertising</span>
    </p>
    <span>When creators need an image, they come to Unsplash. When</span>
    <span>creators think about what to do with that image, <b> we help them think</b></span>
    <span> <b>about your brand.</b>  We create maximum impact by focusing on </span>
    <span>timing and exposure of the following paid placements:</span>
    <ul>
      <li>1.Homepage</li>
      <li>2.Downloads</li>
      <li>3.In-Feed-Placements</li>
    </ul>
   </div>
  </div>
  <SRLWrapper>
    <div className="formSection">
    <div className="result13">
     {
       value.result13.map((image, id)=>(
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
<div className="native">
  <div className="nativeItem">
  <p>
    <i class="fa-solid fa-right-long"></i>
    <span>Native advertising</span>
    </p>
    <span>Advertising shouldn’t push against what people want, it should <i>align</i></span>
    <span> <i>with</i> what they want.</span>
  </div>
</div>
<SRLWrapper>
    <div className="formSection">
    <div className="result14">
     {
       value.result14.map((image, id)=>(
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
<div className="advertising">
  <div className="advertisingItem">
    <h1>Advertising for those who know there’s a <br /> better way.</h1>
    <span>We picked each brand because they were trying to accomplish</span>
    <span>something incredibly difficult: shifting mainstream perception.</span>
  </div>
</div>
<SRLWrapper>
    <div className="formSection">
    <div className="result15">
     {
       value.result15.map((image, id)=>(
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
  <div className="audience">
    <div className="audienceItem">
      <div className="ItemOne">
      <p>
    <i class="fa-solid fa-right-long"></i>
    <span>The Unsplash Audience</span>
    </p>
    <span>We’ve been working with a selection of companies to do just that.</span>
    <span>Our first partners include Google, Harley-Davidson, Square, Boxed</span>
    <span>Water, Le Creuset, and Timberland.</span>
    <br />
    <br />
    <span>We picked each brand because they were trying to accomplish</span>
    <span>something incredibly difficult: shifting mainstream perception.</span>
      </div>
      <div className="ItemTwo">
      <div className="chapter">
        <p>
          <span>All Creative</span>
          <span>Professionals</span>
        </p>
       <div className="chapterTitle">
       <span>Unsplash attracts all creative</span>
        <span>professionals, ranging from Fortune 500</span>
        <span>industry leaders to the growing</span>
        <span>demographic of professionals</span>
        <span>empowered by the democratization of</span>
        <span>creativity.</span>
       </div>
      </div>
      <div className="chapter">
      <p>
          <span>Targeting</span>
          <span>Capability</span>
        </p>
       <div className="chapterTitle">
       <span>Geo-targeting ads, by</span>
        <span>safelisting or blocklisting</span>
        <span>desired countries</span>
       </div>
      </div>
      <div className="chapter">
      <p>
          <span>10x higher than</span>
          <span>Pinterest</span>
        </p>
       <div className="chapterTitle">
       <span>Up to 2.00%</span>
        <span>clickthrough rate</span>
       </div>
      </div>
      <div className="chapter">
      <p>
          <span>75%</span>
        </p>
       <div className="chapterTitle">
       <span>of visitors are</span>
        <span>between the ages</span>
        <span>of 18–34</span>
       </div>
      </div>
      <div className="chapter">
      <p>
          <span>71%</span>
        </p>
       <div className="chapterTitle">
       <span>of visitors have</span>
        <span>a university degree</span>
       </div>
      </div>
      <div className="chapter">
      <p>
          <span>51%</span>
        </p>
       <div className="chapterTitle">
       <span>of our users have a household</span>
        <span>income of more than</span>
        <span>$100k/year</span>
       </div>
      </div>
      </div>
    </div>
  </div>
  <div className="interest" id="info">
    <div className="interestItem">
      <h3>Interested?</h3>
      <p className="contact">Contact <span>partnerships@unsplash.com</span> for more info.</p>
      <div className="interestTitle">
        <span>We’ll be sharing more of our point of view on advertising and updates</span>
        <span>on Unsplash for Brands. If you’d like to get these updates or learn</span>
        <span>more about advertising on Unsplash, you can subscribe below:</span>
      </div>
      <div className="interestBtn">
      <input type="text" placeholder="Email address" />
        <button>Get info</button>
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="footer">
      <div className="footerLeft">
        <img src={logo} alt="" />
        <span>Make something awesome</span>
      </div>
      <div className="footerRight">
        <span>
          <a href="#">About</a>
        </span>
        <span>
          <a href="#">Press</a>
        </span>
        <span>
          <a href="#">Join the team</a>
        </span>
      </div>
    </div>
  </div>

</>
       )
}
