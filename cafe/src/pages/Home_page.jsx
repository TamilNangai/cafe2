import { Carousal } from '../components/Carousal'
import slide1 from '../assets/Hero_Carousal/h1.png'
import slide2 from '../assets/Hero_Carousal/h2.png'
import slide3 from '../assets/Hero_Carousal/h3.png'
import slide4 from '../assets/Hero_Carousal/h4.png'
import h1 from '../assets/home/h1.png'
import h2 from '../assets/home/h2.png'
import h3 from '../assets/home/h3.png'
import h4 from '../assets/home/h4.png'
import h5 from '../assets/home/h5.png'
import h6 from '../assets/home/h6.png'
import h7 from '../assets/home/h7.png'
import h8 from '../assets/home/h8.png'
import h9 from '../assets/home/h9.png'
import h10 from '../assets/home/h10.png'
import Contactus from '../components/Contactus'
import Marqueeslide from '../components/Marqueeslide'
import { Viewbtn } from '../components/Viewbtn'
import { MiniCarosal } from '../components/MiniCarosal'
const slides = [slide1, slide2,  slide3,  slide4];
const slidesl = [h1, h2,  h3, h4, h5];
const slidesr = [h6, h7,  h8, h9, h10];
function Home_page() {
  return (
    <div>
      <Carousal autoSlide={true} autoSlideInterval={3000} slides={slides}/>  
      <Marqueeslide />   
      <MiniCarosal slides={slidesl} autoSlide={true} autoSlideInterval={4000} />  
      <Contactus />
       <Viewbtn to="/About_page" label="View" />
    </div>
  )
}

export default Home_page;
