import { ToastContainer , toast} from 'react-toastify'
import './app.scss'
import React, {useState,useEffect, createContext} from 'react';
import axios from 'axios';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Switch, Route} from 'react-router-dom'
import Body from './components/body/Body'
import ImagesItem from './components/imagesItem/ImagesItem';
import Walpaper from './components/Wallpaper/Walpaper';
import Renders from './components/Renders/Renders';
import Architecture from './components/architecture/Architecture';
import Events from './components/events/Events';
import Nature from './components/nature/Nature';
import Fashion from './components/fashion/Fashion';
import Textures from './components/textures/Textures';
import Food from './components/food/Food';
import People from './components/people/People';
import Health from './components/health/Health';
import Following from './components/following/Following';
import Advertise from './components/advertise/Advertise';
import Blog from './components/blog/Blog';
import Announ from './components/announcement/Announ';
import Product from './components/product/Product';
import Brand from './components/brand/Brand';
import Partner from './components/partnership/Partner';
import Community from './components/community/Community';
export const MyContext = createContext()
export default function App() {
  const [image, setImage] = useState("")
  const [result, setResult] = useState([])
  const [result2, setResult2] = useState([])
  const [result3, setResult3] = useState([]) 
  const [result4, setResult4] = useState([])
  const [result5, setResult5] = useState([])
  const [result6, setResult6] = useState([])
  const [result7, setResult7] = useState([])
  const [result8, setResult8] = useState([])
  const [result9, setResult9] = useState([])
  const [result10, setResult10] = useState([])
  const [result11, setResult11] = useState([])
  const [result12, setResult12] = useState([])
  const [result13, setResult13] = useState([])
  const [result14, setResult14] = useState([])
  const [result15, setResult15] = useState([])
  const [result16, setResult16] = useState([])
  const [result17, setResult17] = useState([])
  const [result18, setResult18] = useState([])
  const [result19, setResult19] = useState([])
  const [result20, setResult20] = useState([])
  const [result21, setResult21] = useState([])
  const [result22, setResult22] = useState([])
  const [result23, setResult23] = useState([])
  const [resOpen, setResOpen] = useState(false)
  const ACCESS_KEY = "am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs"; // Unsplash accsss key
  function getValue(event){
    setImage(event.target.value)
  }
  function getImage(){
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + ACCESS_KEY
    if(image.length > 0){
      axios.get(urlAPI).then((response)=>{
        setResult(response.data.results)
       
      })
    } else{
      toast.error("Please enter your photo name", {
        icon: false
      });
    }
   
  }
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "wallpaper" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult2(response.data.results)
      console.log(response) 
    })
    
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "renders" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult3(response.data.results)
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "architecture" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult4(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "events" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult5(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "nature" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult6(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "fashion" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult7(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "textures" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult8(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "food" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult9(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "people" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult10(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "health" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult11(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "advertise" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult12(response.data.results.filter((item,index)=> index>0 && index<3))
      setResult13(response.data.results.filter((item,index)=> index>=3 && index<9))
      setResult14(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "careful" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult15(response.data.results.filter((item,index)=> index>0 && index<7))
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "feature" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult16(response.data.results.filter((item,index)=> index>0 && index<2))
      setResult17(response.data.results.filter((item,index)=> index>1 && index<3))
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "movie" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult18(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "announcement" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult19(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "product" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult20(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "brand" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult21(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "partnership" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult22(response.data.results)
      console.log(response) 
    })
  }, [])
  useEffect(() => {
    const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + "community" + "&client_id=" + ACCESS_KEY
    axios.get(urlAPI).then((response)=>{
      setResult23(response.data.results)
      console.log(response) 
    })
  }, [])
  
  return (
        <MyContext.Provider value={{
          image: image, result: result, getValue: getValue, getImage: getImage, result2:result2,
          result3:result3, result4: result4,result5:result5, result6:result6, result7:result7,
          result8:result8, result9:result9, result10:result10, result11:result11, result12:result12,
          result13:result13, result14:result14, result15:result15, result16:result16, result17:result17,
          result18:result18, result19:result19, result20:result20, result21:result21, result22:result22,
          result23:result23, resOpen:resOpen,setResOpen:setResOpen
          }}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route exact path="/images" component={ImagesItem}/>
          <Route exact path="/wallpaper" component={Walpaper}/>
          <Route exact path="/renders" component={Renders}/>
          <Route exact path="/architecture" component={Architecture}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/nature" component={Nature}/>
          <Route exact path="/fashion" component={Fashion}/>
          <Route exact path="/textures" component={Textures}/>
          <Route exact path="/food" component={Food}/>
          <Route exact path="/people" component={People}/>
          <Route exact path="/health" component={Health}/>
          <Route exact path="/follow" component={Following}/>
          <Route exact path="/advertise" component={Advertise}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/announ" component={Announ}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/brand" component={Brand}/>
          <Route exact path="/partner" component={Partner}/>
          <Route exact path="/community" component={Community}/>
        </Switch>
      </div>
        </MyContext.Provider>
 
  );
}



