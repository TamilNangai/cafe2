import { Hero } from '../components/Hero'
import  Paragraph  from '../components/Paragraph'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i2 from '../assets/Hero_sectionimage/i2.png'
import c1 from '../assets/coffee/c1.png'
import c2 from '../assets/coffee/c2.png'
import c3 from '../assets/coffee/c3.png'
import c4 from '../assets/coffee/c4.png'
import c5 from '../assets/coffee/c5.png'
import c6 from '../assets/coffee/c6.png'
import c7 from '../assets/coffee/c7.png'
import line from '../assets/Contact/line.png'
import beanl from "../assets/coffee/beanl.png";
import beanr from "../assets/coffee/beanr.png";
import tbean from "../assets/coffee/tbean.png";
import { Footer } from '../components/Footer'
export default function Coffee_page() {
  const coffeeData = [
    {
      id: 1,
      title: "Why We Love Coffee",
      description: "Coffee is cherished not only for its stimulating effects but also for its rich, complex flavors and aromas. It's a social beverage that brings people together, whether in bustling cafes or quiet mornings at home. At Coffee Haven, we're dedicated to celebrating this beloved drink by offering the highest quality products and resources to enhance your coffee journey.",
      image: c1,
      imagePosition: "left",
      imgdiv:"md:w-3/12  absolute mb-5 ",
      main:"max-sm:my-5",
      imageline:line,
      paragraph:"paragraphtwo",
      imageClass:"md:w-auto  xl:h-[400px]  w-[160px] h-auto md:w-[250px] md:h-[350px] lg:w-[330px] lg:h-[400px] md:left-0  lg:top-0  lg:left-7  relative top-0 -left-6 z-40 ",
      textclass:"text-left  ml-[35%]  md:ml-[28%] md:mt-10 md:mb-20 "

    },
     {
      id: 2,
      title: "What Kind Of Coffee We Serve For You",
      description: "A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.",
      image: c2,
      imagePosition: "right",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:"xl:mb-5 mb-10 lg:mx-[50px] ",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px]  ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "Cappocino",
      textcolor:"text-white"
    },
     {
      id: 3,
      description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
      image: c3,
      imagePosition: "left",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:"xl:mb-5 mb-10 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px] ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "Latee",
      textcolor:"text-white"
    },
     {
      id: 4,
      description: "It is made by diluting a shot or two of espresso with hot water. This process gives it a similar strength to drip coffee but with a different flavor profile due to the espresso base. The result is a smooth, slightly milder coffee that still retains the rich flavor of espresso.",
      image: c4,
      imagePosition: "right",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:"xl:mb-5 mb-10 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px] ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "Amaricano",
      textcolor:"text-[#832C2C]"
    },
     {
      id: 5,
      description: "Espresso is a strong, concentrated coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans under high pressure. This method of brewing results in a small, intense shot of coffee with a rich, bold flavor and a thick.Espresso serves as the base for many other coffee drinks, including lattes, cappuccinos, macchiatos, and Americanos.",
      image: c5,
      imagePosition: "left",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:"xl:mb-5 mb-10 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px] ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "Espresso",
      textcolor:"text-white"
    },
     {
      id: 6,
      description: "Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder. Throw in a few ice cubes while blending for a frothy finish. This creamy, frothy drink is just the perfect indulgence on a hot summer day.",
      image: c6,
      imagePosition: "right",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:"xl:mb-5 mb-10 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px] ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "cold coffee",
      textcolor:"text-[#832C2C]"
    },
     {
      id: 7,
      description: "Black coffee is a simple, straightforward coffee drink made by brewing coffee without adding any milk, cream, sugar, or other flavorings. It's typically made using drip coffee makers, French presses, or pour-over methods, where hot water is passed through ground coffee beans, extracting the flavors and producing a clear, dark brew.",
      image: c7,
      imagePosition: "left",
      imgdiv:"md:w-3/12  w-4/12 justify-items-center",
      main:" lg:mx-[50px] xl:mb-0  md:mb-10 mb-8",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  xl:h-[300px] md:mb-10 ",
      textclass:"text-left md:w-9/12 w-8/12",
      showImageName: true,
      imgtitle: "Black Coffee",
      textcolor:"text-white"
    }
  ];
  return (
     <div className='relative '>
      <img className="absolute z-40         h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44       xl:top-[640px]  right-0      lg:top-[520px]                         md:top-[340px]  top-[145px] " src={beanr} alt={beanr} />
      <img className="absolute z-40          h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44      xl:top-[1080px] xl:right-1     lg:top-[1000px] lg:right-5              md:top-[780px]  top-[450px] right-0 " src={tbean} alt={tbean} />
      <img className="absolute z-0     h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44            xl:top-[1435px] xl:left-[310px]      lg:top-[1230px] lg:left-[230px]   md:top-[990px] md:left-[170px] top-[620px]  left-[100px]  " src={tbean} alt={tbean} />
      <img className="absolute z-40          h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44      xl:top-[1670px] right-0      lg:top-[1370px]                        md:top-[1100px]  top-[710px] " src={beanr} alt={beanr} />      
      <Hero image={i2} stylecss={"stylecss"} headcss="headtwo" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"paratwo"} linecss={"linetwo"} lineimagecss={"lineimageone"} paracontent={"Immerse yourself in the rich, bold flavors of freshly brewed coffee. Here, every cup is crafted with care, from the finest beans to the perfect pour. Whether you're a fan of robust espressos, smooth lattes, or a simple, satisfying black coffee, our menu has something to delight every coffee lover."} />
      <div className='md:mx-10 max-sm:mx-5 '>{coffeeData.map((item) => (<Paragraph key={item.id} {...item} />))}</div>      
      <img className="absolute z-40          h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44                      xl:bottom-[1550px]  xl:-left-12      lg:bottom-[1220px] lg:-left-5               md:bottom-[1100px] md:-left-2  bottom-[800px]   " src={tbean} alt={tbean} />
      <img className="absolute z-40 -rotate-[30deg]      h-auto w-12 sm:w-12 md:w-20 lg:w-32 xl:w-44          xl:bottom-[1190px]  xl:right-[360px]   lg:bottom-[960px]  lg:right-[250px]   md:bottom-[858px] md:right-[190px]  bottom-[590px] right-0" src={tbean} alt={tbean} />
      <img className="absolute z-40      h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44                          xl:bottom-[850px]  -left-10           lg:bottom-[670px] lg:-left-6           md:bottom-[580px]  bottom-[400px] " src={beanl} alt={beanl} />
      <img className="absolute z-40         h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-44                       xl:bottom-[540px]  right-0         lg:bottom-[470px]                      md:bottom-[385px]  bottom-[260px] " src={beanr} alt={beanr} />
       <Footer /> 
    </div>
  )
 }

