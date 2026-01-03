import { Hero } from '../components/Hero'
import  Paragraph  from '../components/Paragraph'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i1 from '../assets/Hero_sectionimage/i1.png'
import a1 from '../assets/about/a1.png'
import a2 from '../assets/about/a2.png'
import a3 from '../assets/about/a3.png'
import a4 from '../assets/about/a4.png'
import bp from '../assets/about/bp.png'
import line from '../assets/Contact/line.png'
export default function About_page() {
const aboutData = [
  {
    id: 1,
    title: "About Us",
    description: "Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space.",
    image: a1,
    imagePosition: "right",
    imageline:line,
    paragraph:"paragraphtwo",
    imageClass:"w-[592px] h-[642.78px] right-0 top-10",
    textclass:"text-left md:ml[25%]"
  },
   {
    id: 2,
    title: "Our Story",
    description: "Our journey began with a simple love for tea and coffee. As enthusiasts, we wanted to create a place where people could savor high-quality beverages while feeling right at home. Our dream turned into reality when we opened [Cafe Serenity] , a place where every detail, from the beans we select to the ambiance we create, is crafted with care and dedication.",
    image: a2,
    imagePosition: "left",
    paragraph:"paragraphtwo",
    imageClass:"w-[457px] h-[329.49px] left-0 top-[250px] ",
    textclass:"text-left md:mr[25%]"
  },
   {
    id: 3,
    title: "Our Offerings",
    description: "At  [Cafe Serenity], we pride ourselves on offering an extensive menu of carefully curated teas and coffees. From rich, robust espressos to delicate, fragrant teas, there’s something for everyone. We source our ingredients from the finest suppliers, ensuring every cup is a testament to quality and flavor.",
    image: a3,
    imagePosition: "right",
    paragraph:"paragraphtwo",
    imageClass:"w-[408px] h-[408px] right-0 top-[550px]",
    textclass:"text-left md:ml[25%]"
  },
   {
    id: 4,
    title: "Visit Us",
    description: "We invite you to come and experience the warmth and hospitality of [Your Cafe's Name]. Whether you’re here to work, relax, or catch up with friends, our friendly staff is here to make your visit memorable. Thank you for making us a part of your day!",
    image: a4,
    imagePosition: "left",
    paragraph:"paragraphtwo",
    imageClass:"w-[608px] h-[456px] left-0 top-[800px]",
    textclass:"text-left md:mr[25%]"
  }
];
  return (
    <>
          <Hero  image={i1} stylecss={"stylecss"} headcss="headone" headcontent={"NOW YOU CAN FEEL THE ENERGY WITH OUR DRINKS"} underline={ul1} paracss={"paraone"} linecss={"lineone"} lineimagecss={"lineimageone"} paracontent={"Our passion is serving the perfect cup, every time.Come in, take a seat, and let us craft your favorite drink.Welcome to your new favorite spot— where every sip is a story, and every visit feels like home."} />
          {aboutData.map((item) => (
             <Paragraph key={item.id} {...item} />
          ))}
           <img src={bp} alt="Background" />
      
    </>
  )
}
