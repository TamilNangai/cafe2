import { Carousal } from '../components/Carousal'
import slide1 from '../assets/Hero_Carousal/h1.png'
import slide2 from '../assets/Hero_Carousal/h2.png'
import slide3 from '../assets/Hero_Carousal/h3.png'
import slide4 from '../assets/Hero_Carousal/h4.png'
import Contactus from '../components/Contactus'
import Marqueeslide from '../components/Marqueeslide'
import Viewbtn from '../components/Viewbtn'; 
const slides = [slide1, slide2,  slide3,  slide4];
function Home_page() {
  return (
    <div>
      <Carousal autoSlide={true} autoSlideInterval={3000} slides={slides}/>
      <Marqueeslide />   
      <Contactus />
      <Viewbtn path="/marqueeslide" />
    </div>
  )
}

export default Home_page;
