// import { Hero } from '../components/Hero'
// import  Paragraph  from '../components/Paragraph'
// import ul1 from '../assets/Hero_sectionimage/heroline.png'
// import i2 from '../assets/Hero_sectionimage/i2.png'
// import c1 from '../assets/coffee/c1.png'
// import c2 from '../assets/coffee/c2.png'
// import c3 from '../assets/coffee/c3.png'
// import c4 from '../assets/coffee/c4.png'
// import c5 from '../assets/coffee/c5.png'
// import c6 from '../assets/coffee/c6.png'
// import c7 from '../assets/coffee/c7.png'
// import line from '../assets/Contact/line.png'
// export default function Coffee_page() {
//   const coffeeData = [
//     {
//       id: 1,
//       title: "Why We Love Coffee",
//       description: "Coffee is cherished not only for its stimulating effects but also for its rich, complex flavors and aromas. It's a social beverage that brings people together, whether in bustling cafes or quiet mornings at home. At Coffee Haven, we're dedicated to celebrating this beloved drink by offering the highest quality products and resources to enhance your coffee journey.",
//       image: c1,
//       imagePosition: "left",
//       imageline:line,
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[450px] h-[400px] relative top-0right-0 z-40 ",
//       textclass:"text-left md:ml-[28%] mb-20"

//     },
//      {
//       id: 2,
//       title: "What Kind Of Coffee We Serve For You",
//       description: "A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.",
//       image: c2,
//       imagePosition: "right",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px]  ",
//       textclass:"text-left md:mr-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "Cappocino"
//     },
//      {
//       id: 3,
//       description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
//       image: c3,
//       imagePosition: "left",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px] ",
//       textclass:"text-left md:ml-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "Latee"
//     },
//      {
//       id: 4,
//       description: "It is made by diluting a shot or two of espresso with hot water. This process gives it a similar strength to drip coffee but with a different flavor profile due to the espresso base. The result is a smooth, slightly milder coffee that still retains the rich flavor of espresso.",
//       image: c4,
//       imagePosition: "right",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px] ",
//       textclass:"text-left md:mr-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "Amaricano"
//     },
//      {
//       id: 5,
//       description: "Espresso is a strong, concentrated coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans under high pressure. This method of brewing results in a small, intense shot of coffee with a rich, bold flavor and a thick.Espresso serves as the base for many other coffee drinks, including lattes, cappuccinos, macchiatos, and Americanos.",
//       image: c5,
//       imagePosition: "left",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px] ",
//       textclass:"text-left md:ml-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "Espresso"
//     },
//      {
//       id: 6,
//       description: "Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder. Throw in a few ice cubes while blending for a frothy finish. This creamy, frothy drink is just the perfect indulgence on a hot summer day.",
//       image: c6,
//       imagePosition: "right",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px] ",
//       textclass:"text-left md:mr-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "cold coffee"
//     },
//      {
//       id: 7,
//       description: "Black coffee is a simple, straightforward coffee drink made by brewing coffee without adding any milk, cream, sugar, or other flavorings. It's typically made using drip coffee makers, French presses, or pour-over methods, where hot water is passed through ground coffee beans, extracting the flavors and producing a clear, dark brew.",
//       image: c7,
//       imagePosition: "left",
//       paragraph:"paragraphtwo",
//       imageClass:"w-auto lg:w-[400px] h-[300px] ",
//       textclass:"text-left md:ml-[28%] mb-10",
//       showImageName: false,
//       imgtitle: "Black Coffee"
//     }
//   ];
//   return (
//      <div className='relative  overflow-hidden  '>
//           <Hero image={i2} stylecss={"stylecss"} headcss="headtwo" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"paratwo"} linecss={"linetwo"} lineimagecss={"lineimageone"} paracontent={"Immerse yourself in the rich, bold flavors of freshly brewed coffee. Here, every cup is crafted with care, from the finest beans to the perfect pour. Whether you're a fan of robust espressos, smooth lattes, or a simple, satisfying black coffee, our menu has something to delight every coffee lover."} />
//           {coffeeData.map((item) => (<Paragraph key={item.id} {...item} />))}        
//     </div>
//   )
// }







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
export default function Coffee_page() {
  const coffeeData = [
    {
      id: 1,
      title: "Why We Love Coffee",
      description: "Coffee is cherished not only for its stimulating effects but also for its rich, complex flavors and aromas. It's a social beverage that brings people together, whether in bustling cafes or quiet mornings at home. At Coffee Haven, we're dedicated to celebrating this beloved drink by offering the highest quality products and resources to enhance your coffee journey.",
      image: c1,
      imagePosition: "left",
      imgdiv:"absolute mb-5",
      imageline:line,
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[400px] relative top-0 right-0 z-40 ",
      textclass:"text-left md:ml-[28%] mt-10 mb-20 w-8/12"

    },
     {
      id: 2,
      title: "What Kind Of Coffee We Serve For You",
      description: "A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.",
      image: c2,
      imagePosition: "right",
      imgdiv:"w-4/12 justify-items-center",
      main:"mb-5 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px]  ",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "Cappocino"
    },
     {
      id: 3,
      description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
      image: c3,
      imagePosition: "left",
      imgdiv:"w-4/12 justify-items-center",
      main:"mb-5 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px] ",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "Latee"
    },
     {
      id: 4,
      description: "It is made by diluting a shot or two of espresso with hot water. This process gives it a similar strength to drip coffee but with a different flavor profile due to the espresso base. The result is a smooth, slightly milder coffee that still retains the rich flavor of espresso.",
      image: c4,
      imagePosition: "right",
      imgdiv:"w-4/12 justify-items-center",
      main:"mb-5 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px] ",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "Amaricano"
    },
     {
      id: 5,
      description: "Espresso is a strong, concentrated coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans under high pressure. This method of brewing results in a small, intense shot of coffee with a rich, bold flavor and a thick.Espresso serves as the base for many other coffee drinks, including lattes, cappuccinos, macchiatos, and Americanos.",
      image: c5,
      imagePosition: "left",
      imgdiv:"w-4/12 justify-items-center",
      main:"mb-5 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px] ",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "Espresso"
    },
     {
      id: 6,
      description: "Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder. Throw in a few ice cubes while blending for a frothy finish. This creamy, frothy drink is just the perfect indulgence on a hot summer day.",
      image: c6,
      imagePosition: "right",
      imgdiv:"w-4/12 justify-items-center",
      main:"mb-5 lg:mx-[50px]",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px] ",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "cold coffee"
    },
     {
      id: 7,
      description: "Black coffee is a simple, straightforward coffee drink made by brewing coffee without adding any milk, cream, sugar, or other flavorings. It's typically made using drip coffee makers, French presses, or pour-over methods, where hot water is passed through ground coffee beans, extracting the flavors and producing a clear, dark brew.",
      image: c7,
      imagePosition: "left",
      imgdiv:"w-4/12 justify-items-center",
      main:" lg:mx-[50px] mb-0",
      paragraph:"paragraphtwo",
      imageClass:"w-auto  h-[300px] mb-10",
      textclass:"text-left  w-8/12",
      showImageName: false,
      imgtitle: "Black Coffee"
    }
  ];
  return (
     <div className='relative'>
      <img class="absolute top-[640px]  right-0 z-40 " src={beanr} alt={beanr} />
      <img class="absolute top-[1100px]  right-0 z-40 " src={tbean} alt={tbean} />
      <img class="absolute top-[1450px]  left-[400px]  z-0 " src={tbean} alt={tbean} />
      <img class="absolute top-[1630px]  right-0 z-40 " src={beanr} alt={beanr} />      
      <Hero image={i2} stylecss={"stylecss"} headcss="headtwo" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"paratwo"} linecss={"linetwo"} lineimagecss={"lineimageone"} paracontent={"Immerse yourself in the rich, bold flavors of freshly brewed coffee. Here, every cup is crafted with care, from the finest beans to the perfect pour. Whether you're a fan of robust espressos, smooth lattes, or a simple, satisfying black coffee, our menu has something to delight every coffee lover."} />
      {coffeeData.map((item) => (<Paragraph key={item.id} {...item} />))}        
      <img class="absolute bottom-[900px] -left-10  z-40 " src={tbean} alt={tbean} />
      <img class="absolute bottom-[500px] right-[450px] z-40 -rotate-[30deg] " src={tbean} alt={tbean} />
      <img class="absolute bottom-[160px] -left-10  z-40 " src={beanl} alt={beanl} />
      <img class="absolute -bottom-[132px] right-0 z-50" src={beanr} alt={beanr} />
        
    </div>
  )
}

