import './blogFooter.scss'
import logo from '../../assets/logo.png'
export default function BlogFooter() {
       return (
              <div className="blogFooter">
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
       )
}
