import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SRLWrapper } from 'simple-react-lightbox'
import './brand.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'
import BlogFooter from '../blogFooter/BlogFooter'
import BlogHeader from '../blogHeader/BlogHeader'
export default function Brand() {
       const value = useContext(MyContext)
       return (
              <>

              <BlogHeader/>
              <div className="brand">
                     <div className="homeHeader">
                            <h1>Brands</h1>
                            <p>The latest visual campaigns on Unsplash</p>
                     </div>
                    
                     <div className="Latest">
                            <SRLWrapper>
 
   <div className="result21">
     {
       value.result21.map((image, id)=>(
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
                     <Link to='./brand'>
                     <button>Learn more</button>
                     </Link>
                     <div className="homeFooter">
                           <BlogFooter/>
                     </div>
                     </div>
       </>
       )
}
