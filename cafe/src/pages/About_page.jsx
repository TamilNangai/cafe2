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
// const aboutData = [
//   {
//     id: 1,
//     title: "About Us",
//     description: "Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space.",
//     image: a1,
//     imgdiv:"w-3/12",
//     imgdiv:"w-3/12",
//     imagePosition: "right",
//     imageline:line,
//     paragraph:"paragraphtwo",
//     imageClass:"w-auto absolute lg:w-[592px] h-[495px] relative top-0 right-0 z-40 ",
//     textclass:"text-left  w-9/12 "
    
//   },
//    {
//     id: 2,
//     title: "Our Story",
//     description: "Our journey began with a simple love for tea and coffee. As enthusiasts, we wanted to create a place where people could savor high-quality beverages while feeling right at home. Our dream turned into reality when we opened [Cafe Serenity] , a place where every detail, from the beans we select to the ambiance we create, is crafted with care and dedication.",
//     image: a2,
    // imgdiv:"w-3/12",
//     imagePosition: "left",
//     paragraph:"paragraphtwo",
//     imageClass:"w-auto lg:w-[457px] h-[329.49px]  ",
//     textclass:"text-left  w-9/12  "
//   },
//    {
//     id: 3,
//     title: "Our Offerings",
//     description: "At  [Cafe Serenity], we pride ourselves on offering an extensive menu of carefully curated teas and coffees. From rich, robust espressos to delicate, fragrant teas, there’s something for everyone. We source our ingredients from the finest suppliers, ensuring every cup is a testament to quality and flavor.",
//     image: a3,
//     imgdiv:"w-3/12",
//     imagePosition: "right",
//     paragraph:"paragraphtwo",
//     imageClass:"w-auto lg:w-[408px] h-[308px] ",
//     textclass:"text-left  w-9/12 "
//   },
//    {
//     id: 4,
//     title: "Visit Us",
//     description: "We invite you to come and experience the warmth and hospitality of [Your Cafe's Name]. Whether you’re here to work, relax, or catch up with friends, our friendly staff is here to make your visit memorable. Thank you for making us a part of your day!",
//     image: a4,
//     imgdiv:"w-3/12",
//     imagePosition: "left",
//     paragraph:"paragraphtwo",
//     imageClass:"w-auto lg:w-[608px] h-[356px] ",
//     textclass:"text-left  w-9/12  "
//   }
// ];



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
     imageClass:"w-auto lg:w-[430px] h-[560px] relative -top-[80px] right-0 z-40 ",
      textclass:"text-left md:mr-[28%]  mt-10 mb-20"

    },
     {
      id: 2,
      title: "Our Story",
      description: "Our journey began with a simple love for tea and coffee. As enthusiasts, we wanted to create a place where people could savor high-quality beverages while feeling right at home. Our dream turned into reality when we opened [Cafe Serenity] , a place where every detail, from the beans we select to the ambiance we create, is crafted with care and dedication.",
      main:"mb-10",
      image: a2,
      imagePosition: "left",
      imgdiv:"w-3/12",      
      paragraph:"paragraphtwo",
      imageClass:"w-auto lg:w-[457px] h-[329px]  ",
      textclass:"text-left  w-9/12  "
    },
     {
      id: 3,
      title:"Our Offerings",
      description: "At  [Cafe Serenity], we pride ourselves on offering an extensive menu of carefully curated teas and coffees. From rich, robust espressos to delicate, fragrant teas, there’s something for everyone. We source our ingredients from the finest suppliers, ensuring every cup is a testament to quality and flavor.",
      main:"mb-10",
      image: a3,
      imagePosition: "right",
      imgdiv:"w-3/12",      
      paragraph:"paragraphtwo",
      imageClass:"w-auto lg:w-[380px] h-[228px] ",
      textclass:"text-left  w-9/12  "
    },
     {
      id: 4,
      title:"Visit Us",
      description: "We invite you to come and experience the warmth and hospitality of [Your Cafe's Name]. Whether you’re here to work, relax, or catch up with friends, our friendly staff is here to make your visit memorable. Thank you for making us a part of your day!",
      main:"mb-10",
      image: a4,
      imagePosition: "left",
      imgdiv:"w-3/12",     
      main:"mb-10", 
      paragraph:"paragraphtwo",
      imageClass:"w-auto lg:w-[330px] h-[246px] ",
      textclass:"text-left  w-9/12  "
    }
  ];


  return (
    <div className='relative  overflow-hidden  '>
      <Hero  image={i1} stylecss={"stylecss"} headcss="headone" headcontent={"NOW YOU CAN FEEL THE ENERGY WITH OUR DRINKS"} underline={ul1} paracss={"paraone"} linecss={"lineone"} lineimagecss={"lineimageone"} paracontent={"Our passion is serving the perfect cup, every time.Come in, take a seat, and let us craft your favorite drink.Welcome to your new favorite spot— where every sip is a story, and every visit feels like home."} />
      <img className='absolute z-0 top-[650px] -left-3  ' src={beanl} alt={beanl} />
      <img className='absolute z-0 top-[1375px] left-6 -rotate-[30deg] ' src={tbean} alt={tbean} />
      <img className='absolute z-0 top-[1330px] left-[1345px]  ' src={beanr} alt={beanr} />
      <div className='lg:ms-[80px] lg:me-[30px]'>{aboutData.map((item) => (<Paragraph key={item.id} {...item} />))} </div>       
      <img className='absolute z-0 top-[1680px] -left-[40px]  ' src={beanl} alt={beanl} />
      <img className='absolute z-0 top-[1950px] right-0 -rotate-[100deg]' src={tbean} alt={tbean} />
      <img className='lg:w-[702.7px] h-[557px]  absolute bottom-48 left-[450px]' src={bp} alt="Background" />          
    </div>
  )
}
