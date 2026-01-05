import { Hero } from '../components/Hero'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i3 from '../assets/Hero_sectionimage/i3.png'
import t1 from '../assets/tea/cup2.png'
import t2 from '../assets/tea/t2.png'
import t3 from '../assets/tea/t3.png'
import t4 from '../assets/tea/t4.png'
import t5 from '../assets/tea/t5.png'
import t6 from '../assets/tea/t6.png'
import t7 from '../assets/tea/t7.png'
import line from '../assets/Contact/line.png'
import Paragraph from '../components/Paragraph'
export default function Tea_page() {
 const coffeeData = [
     {
       id: 1,
       title: "Why We Love Coffee",
       description: "Coffee is cherished not only for its stimulating effects but also for its rich, complex flavors and aromas. It's a social beverage that brings people together, whether in bustling cafes or quiet mornings at home. At Coffee Haven, we're dedicated to celebrating this beloved drink by offering the highest quality products and resources to enhance your coffee journey.",
       image: t1,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       imgdiv:"absolute mb-5",
       imageline:line,
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[534.40px] h-[770.40px] relative -top-20 right-0 z-40",
       textclass:" w-8/12 text-left  md:ml-[28%] mt-10 mb-20" 
     },
      {
       id: 2,
       title: "What Kind Of Coffee We Serve For You",
       description: "A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced. The combination of flavors and textures creates a delightful and comforting experience for many coffee enthusiasts.",
       image: t2,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px]  ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "Cappocino"
     },
      {
       id: 3,
       description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
       image: t3,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "Latee"
     },
      {
       id: 4,
       description: "It is made by diluting a shot or two of espresso with hot water. This process gives it a similar strength to drip coffee but with a different flavor profile due to the espresso base. The result is a smooth, slightly milder coffee that still retains the rich flavor of espresso.",
       image: t4,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "Amaricano"
     },
      {
       id: 5,
       description: "Espresso is a strong, concentrated coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans under high pressure. This method of brewing results in a small, intense shot of coffee with a rich, bold flavor and a thick.Espresso serves as the base for many other coffee drinks, including lattes, cappuccinos, macchiatos, and Americanos.",
       image: t5,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "Espresso"
     },
      {
       id: 6,
       description: "Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder. Throw in a few ice cubes while blending for a frothy finish. This creamy, frothy drink is just the perfect indulgence on a hot summer day.",
       image: t6,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "cold coffee"
     },
      {
       id: 7,
       description: "Black coffee is a simple, straightforward coffee drink made by brewing coffee without adding any milk, cream, sugar, or other flavorings. It's typically made using drip coffee makers, French presses, or pour-over methods, where hot water is passed through ground coffee beans, extracting the flavors and producing a clear, dark brew.",
       image: t7,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
       showImageName: false,
       imgtitle: "Black Coffee"
     }
   ];
   return (
      <div className='relative   mb-10'>
           <Hero image={i3} stylecss={"stylecss"} headcss="headthree" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"parathree"} linecss={"linethree"} lineimagecss={"lineimageone"} paracontent={"Discover the art of tea in every cup at our cozy haven. From the first sip, you'll be transported to a world of tranquility, where each blend is a journey through fragrant gardens and lush tea fields."} />
           {coffeeData.map((item) => (<Paragraph key={item.id} {...item} />))}        
     </div>
   )
 }

