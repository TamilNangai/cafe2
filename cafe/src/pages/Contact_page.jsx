import { Hero } from '../components/Hero'
import ul2 from '../assets/Hero_sectionimage/ul2.png'
import i4 from '../assets/Hero_sectionimage/i4.png'
import Contactus from '../components/Contactus'
import Form from '../components/Form'


export default function Contact_us() {
  return (
    <>
          <Hero image={i4} stylecss={"stylecss"} headcss="headfour" headcontent={"CONTACT US"} underline={ul2} paracss={"parafour"} linecss={"linefour"} lineimagecss={"lineimagetwo"} paracontent={"We’d love to hear from you!Whether you hav a  questios,feedback  just want to say hello, feel free to reach out us"} />
          <div className='mb-20 md:mb-32 lg:mb-0'>
          <Contactus />
          <Form/>
          </div>
    </>
  
  )
}
