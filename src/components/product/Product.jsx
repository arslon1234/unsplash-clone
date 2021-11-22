import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SRLWrapper } from 'simple-react-lightbox'
import './product.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'
import BlogFooter from '../blogFooter/BlogFooter'
import BlogHeader from '../blogHeader/BlogHeader'
export default function Product() {
       const value = useContext(MyContext)
       return (
              <>

              <BlogHeader/>
              <div className="product">
                     <div className="homeHeader">
                            <h1>Product</h1>
                            <p>Behind the scenes with the design and engineering teams.</p>
                     </div>
                    
                     <div className="Latest">
                            <SRLWrapper>
 
   <div className="result20">
     {
       value.result20.map((image, id)=>(
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
                     <Link to='./product'>
                     <button>Learn more</button>
                     </Link>
                     <div className="homeFooter">
                           <BlogFooter/>
                     </div>
                     </div>
       </>
       )
}
