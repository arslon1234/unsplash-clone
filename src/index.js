import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

ReactDOM.render(
    <SimpleReactLightbox>
<ToastContainer/>
       <BrowserRouter>
   <App/>
   </BrowserRouter>
    </SimpleReactLightbox>

   , document.getElementById('root')
)