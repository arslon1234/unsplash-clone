import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SRLWrapper } from 'simple-react-lightbox'
import './partner.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'
import BlogFooter from '../blogFooter/BlogFooter'
import BlogHeader from '../blogHeader/BlogHeader'
export default function Partner() {
       const value = useContext(MyContext)
       return (
              <>

              <BlogHeader/>
              <div className="partner">
                     <div className="homeHeader">
                            <h1>Partnerships</h1>
                            <p>The latest collaborations between Unsplash and our partners</p>
                     </div>
                    
                     <div className="Latest">
                            <SRLWrapper>
 
   <div className="result22">
     {
       value.result22.map((image, id)=>(
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
                     <Link to='./partner'>
                     <button>Learn more</button>
                     </Link>
                     <div className="homeFooter">
                           <BlogFooter/>
                     </div>
                     </div>
       </>
       )
}
