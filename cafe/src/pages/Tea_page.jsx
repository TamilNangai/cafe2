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
import beanl from "../assets/coffee/beanl.png";
import beanr from "../assets/coffee/beanr.png";
import tbean from "../assets/coffee/tbean.png";
export default function Tea_page() {
 const coffeeData = [
     {
       id: 1,
       title: "Why We Love Tea",
       description: "We believe that tea is the perfect blend of tradition and innovation, offering something for everyone. Whether you're sipping a delicate white tea, enjoying the robust flavors of a classic black tea, or exploring the aromatic world of herbal blends, each cup tells a story.",
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
       title: "What Kind Of Tea We Serve For You",
       description: "Black tea is fully oxidized, giving it a deep, rich flavor with a hint of sweetness. It’s the most popular tea worldwide, known for its strong taste and higher caffeine content. Whether you enjoy it plain, with a splash of milk, or a touch of honey, black tea is a perfect pick-me-up any time of day.",
       image: t2,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-28 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px]  ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "Black Tea",
      textcolor:"text-white"
     },
      {
       id: 3,
       description: "Green tea is only slightly oxidized, which preserves its natural green color and fresh taste. It’s known for its grassy, slightly sweet flavor and is packed with antioxidants. Green tea is celebrated for its health benefits, including boosting metabolism and enhancing mental clarity.",
       image: t3,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "Green Tea",
      textcolor:"text-white"
     },
      {
       id: 4,
       description: "White tea is the least processed of all teas, made from young tea leaves and buds. Its flavor is light, sweet, and delicate, making it a favorite for those who prefer a softer taste. White tea is also rich in antioxidants and is often praised for its calming properties.",
       image: t4,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-20 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "White Tea",
      textcolor:"text-white"
     },
      {
       id: 5,
       description: "Oolong tea is partially oxidized, striking a balance between black and green tea. It offers a wide range of flavors, from floral and fruity to toasty and nutty, depending on the level of oxidation. Oolong is perfect for those who enjoy a tea with depth and character.",
       image: t5,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "Oolong Tea",
      textcolor:"text-white"
     },
      {
       id: 6,
       description: "Herbal teas, also known as tisanes, are made from a variety of herbs, flowers, and fruits. They are naturally caffeine-free and come in a wide range of flavors, from soothing chamomile to zesty peppermint. Herbal teas are perfect for unwinding and enjoying a moment of tranquility.",
       image: t6,      
      imgdiv:"w-4/12",
      imagePosition: "right",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "Herbal Tea",
      textcolor:"text-white"
     },
      {
       id: 7,
       description: "Chai is a spiced tea made with black tea and a variety of warming spices like cinnamon, cardamom, and ginger. It’s often enjoyed with milk and sweetened to taste. Chai is a perfect blend of bold tea and aromatic spices, offering a cozy and comforting experience.",
       image: t7,      
      imgdiv:"w-4/12",
      imagePosition: "left",
       main:"mb-5 lg:mx-[80px]",
       paragraph:"paragraphtwo",
       imageClass:"w-auto lg:w-[400px] h-[300px] ",
       textclass:" w-8/12 text-left   ",
      showImageName: true,
      imgtitle: "Chai",
      textcolor:"text-white"
     }
   ];
   return (
      <div className='relative   mb-10'>
        <img class="absolute top-[740px]  right-0 z-40 " src={tbean} alt={tbean} />
        <img class="absolute top-[1320px]  -left-8 z-40 " src={beanl} alt={beanl} />
        <img class="absolute top-[1695px]  right-0  z-0 " src={tbean} alt={tbean} />
        <img class="absolute top-[2100px]  right-0 z-40 " src={beanr} alt={beanr} />
        <Hero image={i3} stylecss={"stylecss"} headcss="headthree" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"parathree"} linecss={"linethree"} lineimagecss={"lineimageone"} paracontent={"Discover the art of tea in every cup at our cozy haven. From the first sip, you'll be transported to a world of tranquility, where each blend is a journey through fragrant gardens and lush tea fields."} />
        {coffeeData.map((item) => (<Paragraph key={item.id} {...item} />))}        
        <img class="absolute bottom-[500px] left-0  z-40 " src={tbean} alt={tbean} />
        <img class="absolute -bottom-28 -left-10 z-40 -rotate-[30deg] " src={beanl} alt={beanl} />
        <img class="absolute -bottom-20 -right-5  z-40 " src={tbean} alt={tbean} />
                 
     </div>
   )
 }

