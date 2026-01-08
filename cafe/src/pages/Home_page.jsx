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
import Paragraph from '../components/Paragraph'
import { Footer } from '../components/Footer'
const slides = [slide1, slide2,  slide3,  slide4];
const slidesl = [h1, h2,  h3, h4, h5];
const slidesr = [h6, h7,  h8, h9, h10];
function Home_page() {
  return (
    <div>
      <Carousal autoSlide={true} autoSlideInterval={3000} slides={slides}/>  
      <Paragraph title="Relax and Unwind" description="Find your perfect spot to relax and unwind, whether you're catching up with friends, reading a book, or simply enjoying some quiet time with a great cup of coffee or tea.Our cozy ambiance and comfortable seating provide the perfect environment for you to recharge and enjoy the simple pleasures of life. " paragraph="paragraphone" main="p-3 px-5 md:p-5 md:py-10 md:px-10"/>
      <Marqueeslide />   
      <Paragraph title="About us" description="Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space." paragraph="paragraphone" main="p-3 px-5  md:pt-10 md:px-14"/>
      <Viewbtn to="/About_page" label="View" />
      <div className='grid grid-cols-[30%_40%_30%] place-items-center px-1 md:px-5 mb-10 md:mb-10 '>
      <MiniCarosal slides={slidesl} autoSlide={true} autoSlideInterval={4000}  />  
      <Paragraph title="Our Special Brews and Teas" description="Savor the unique flavors of our special brews and teas, meticulously crafted by our expert baristas using the finest coffee beans and tea leaves s made daily with love and the freshest ingredients to perfectly your coffee and tea experience" paragraph="paragraphone" parahead="text-[11px] md:text-[23px] lg:text-[31px] " />
      <MiniCarosal slides={slidesr} autoSlide={true} autoSlideInterval={4000} />  
      </div>
      <Contactus />
      <Viewbtn to="/Contact_page" label="View" />
      <Footer />
    </div>
  )
}

export default Home_page;