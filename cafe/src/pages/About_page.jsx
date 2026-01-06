import { Hero } from '../components/Hero'
import  Paragraph  from '../components/Paragraph'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i1 from '../assets/Hero_sectionimage/i1.png'
import a1 from '../assets/about/cup.png'
import a2 from '../assets/about/a2.png'
import a3 from '../assets/about/a3.png'
import a4 from '../assets/about/a4.png'
import bp from '../assets/about/bp.png'
import line from '../assets/Contact/line.png'
import beanl from "../assets/coffee/beanl.png";
import beanr from "../assets/coffee/beanr.png";
import tbean from "../assets/coffee/tbean.png";
export default function About_page() {

const aboutData = [
    {
      id: 1,
      title: "About Us",
      description: "Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space.",
      image: a1,
      imagePosition: "right",
      imgdiv:"  absolute",
      imageline:line,
      paragraph:"paragraphtwo",
     imageClass:"-top-8 w-[160px] h-auto md:w-[250px] md:h-[400px] lg:w-[330px] lg:h-[500px] xl:w-[430px] xl:h-[560px] relative md:-top-[80px] md:right-0 z-40 ",
      textclass:"text-left mr-[35%]  md:mr-[28%]  md:mt-10 md:mb-20"

    },
     {
      id: 2,
      title: "Our Story",
      description: "Our journey began with a simple love for tea and coffee. As enthusiasts, we wanted to create a place where people could savor high-quality beverages while feeling right at home. Our dream turned into reality when we opened [Cafe Serenity] , a place where every detail, from the beans we select to the ambiance we create, is crafted with care and dedication.",
      main:"mb-10 items",
      image: a2,
      imagePosition: "left",
      imgdiv:"md:w-3/12 w-4/12",      
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:w-[457px] xl:h-[329px]  ",
      textclass:"text-left md:w-9/12  w-8/12  "
    },
     {
      id: 3,
      title:"Our Offerings",
      description: "At  [Cafe Serenity], we pride ourselves on offering an extensive menu of carefully curated teas and coffees. From rich, robust espressos to delicate, fragrant teas, there’s something for everyone. We source our ingredients from the finest suppliers, ensuring every cup is a testament to quality and flavor.",
      main:"mb-10",
      image: a3,
      imagePosition: "right",
      imgdiv:"md:w-3/12 w-4/12",      
      paragraph:"paragraphtwo",
      imageClass:"w-auto xl:w-[380px] xl:h-[228px] ",
      textclass:"text-left  md:w-9/12 w-8/12  "
    },
     {
      id: 4,
      title:"Visit Us",
      description: "We invite you to come and experience the warmth and hospitality of [Your Cafe's Name]. Whether you’re here to work, relax, or catch up with friends, our friendly staff is here to make your visit memorable. Thank you for making us a part of your day!",
      main:"mb-10",
      image: a4,
      imagePosition: "left",
      imgdiv:"md:w-3/12 w-4/12 ",     
      main:"mb-10", 
      paragraph:"paragraphtwo",
      imageClass:"w-auto xl:w-[330px] xl:h-[246px] flex justify-item-center",
      textclass:"text-left md:w-9/12 w-8/12  "
    }
  ];


  return (
    <div className='relative  overflow-hidden  '>
      <Hero  image={i1} stylecss={"stylecss"} headcss="headone" headcontent={"NOW YOU CAN FEEL THE ENERGY WITH OUR DRINKS"} underline={ul1} paracss={"paraone"} linecss={"lineone"} lineimagecss={"lineimageone"} paracontent={"Our passion is serving the perfect cup, every time.Come in, take a seat, and let us craft your favorite drink.Welcome to your new favorite spot— where every sip is a story, and every visit feels like home."} />
      <img className='absolute z-0 h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44 xl:top-[650px] xl:-left-3   lg:top-[520px] lg:-left-3 md:top-[350px] md:-left-3 top-[150px] -left-3' src={beanl} alt={beanl} />
      <img className='absolute z-0 h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44 xl:top-[1335px] xl:left-0  lg:top-[1120px] lg:left-1 md:top-[880px] md:left-4 top-[460px] left-0 -rotate-[30deg] ' src={tbean} alt={tbean} />
      <img className='absolute z-0 h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44 xl:top-[1330px] xl:right-0 lg:top-[1150px] lg:right-0 md:top-[920px] md:right-0 top-[510px] right-0' src={beanr} alt={beanr} />
      <div className='lg:ms-[80px] lg:me-[30px] md:ms-[50px] md:me-[20px] ms-[20px] me-[5px]'>{aboutData.map((item) => (<Paragraph key={item.id} {...item} />))} </div>       
      <img className='absolute z-0 h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44 xl:top-[1670px] xl:-left-[40px] lg:top-[1420px] lg:-left-[40px] md:top-[1180px] md:-left-[50px] top-[750px] -left-[40px] ' src={beanl} alt={beanl} />
      <img className='absolute z-0 h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44 xl:top-[1920px] xl:right-0 lg:top-[1640px] lg:right-0 md:top-[1390px] md:right-0 top-[920px] right-0 -rotate-[100deg]' src={tbean} alt={tbean} />
      <img className='xl:w-[702.7px] xl:h-[557px] lg:w-[602.7px] lg:h-[457px]  absolute xl:bottom-60 xl:left-[450px] lg:bottom-52 lg:left-[250px]' src={bp} alt="Background" />          
    </div>
  )
}
