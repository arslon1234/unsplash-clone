import './imgItem.scss'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../header/Header';
export default function ImagesItem() {
       const value = useContext(MyContext)
       return (
         <>
         <Header/>
              <div className="imgItem">
                    <SRLWrapper>
<div className="formSection">
 
   <div className="result">
     {
       value.result.map((image, id)=>(
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
