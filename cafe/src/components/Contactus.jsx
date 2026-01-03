
import line from '../assets/Contact/line.png'
import opentime from '../assets/Contact/opentime.png'
import contact from '../assets/Contact/contact.png'
import address from '../assets/Contact/address.png'
import phone from '../assets/Contact/phone.png'
import email from '../assets/Contact/email.png'
import coffee from '../assets/Contact/coffee.png'
import coffee_beantl from '../assets/Contact/coffee_beantl.png'
import coffee_beantr from '../assets/Contact/coffee_beantr.png'
import coffee_beanbl from '../assets/Contact/coffee_beanbl.png'
import coffee_beanh from '../assets/Contact/coffee_beanh.png'
const Contactus = () => {
   
    return (
        <div className='relative  mb-10'>
            <div className='absolute -top-5 left-0 rotate-280 z-20'>
                <img className=" h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48" src={coffee_beantl} alt="coffee_beantl" />
            </div>
            <div className='absolute -top-5 right-0 z-20'>
                <img className=" h-auto w-16 sm:w-24 md:w-30 lg:w-28 xl:w-32" src={coffee_beantr} alt="coffee_beantr" />
            </div>
            <h1 className='flex justify-center items-center abeezee text-[25px] sm:text-[20px] md:text-[33px] lg:text-[37px] xl:text-[40px]   text-[#5C2D0B]'>Contact us</h1>
            <h1 className='flex justify-center items-center font-[Abhaya-Libre-ExtraBold] font-extrabold text-[23px] sm:text-[35px] md:text-[38px] lg:text-[41px] xl:text-[44px]  text-[#7a2121] z-10'>WE ARE HERE FOR YOU</h1>
            <div className='flex justify-center items-center '><img className='w-40 md:w-60 lg:w-96 h-auto' src={line} alt="line" /></div>
            <section className='sm:flex flex-row justify-evenly grid grid-cols-3  gap-2  z-10  m-1'>
                <div className='flex flex-col items-center md:mt-10'>
                    <img className='w-auto h-14 md:h-40 lg:h-auto' src={opentime} alt="opentime" />
                    <h2 className='sedgwick font-normal text-[15px] sm:text-[15px] md:text-[22px] lg:text-[30px] xl:text-[35px] text-[#7a2121]'>Open Time</h2>
                    <p className='Bellefair font-normal para md:mt-6 mt-2 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px]'>
                        Monday to Sunday<br />
                        9.00 AM-8.00 PM</p>
                    <p className='Bellefair font-normal para md:mt-6 mt-2 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] '>
                        Sunday<br />
                        9.00 AM-10.00 PM</p>
                </div>
                <div className='flex flex-col items-center md:mt-10'>
                    <img className='w-auto h-14 md:h-40 lg:h-auto' src={contact} alt="contact" />
                    <h2 className='sedgwick font-normal text-[15px] sm:text-[15px] md:text-[22px] lg:text-[30px] xl:text-[35px] text-[#7a2121]'>Contact</h2>
                    <ul className='flex flex-col items-start'>
                        <li className='Bellefair font-normal para md:mt-6 mt-2 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] '>
                            <img className='md:mr-5 mr-1  h-auto w-5 lg:w-12 xl:w-12' src={phone} alt="phone" />
                            (123) 456-7890
                        </li>
                        <li className='Bellefair font-normal para md:mt-6 mt-2 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] '>
                            <img className='md:mr-5 mr-1  h-auto w-5 lg:w-12 xl:w-12' src={email} alt="email" />
                            Cozycup@mail.com
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center md:mt-10'>
                    <img className='w-auto h-14 md:h-40 lg:h-auto' src={address} alt="address" />
                    <h2 className='sedgwick font-normal text-[15px] sm:text-[15px] md:text-[22px] lg:text-[30px] xl:text-[35px] text-[#7a2121]'>Our Address</h2>
                    <p className='Bellefair font-normal para md:mt-6 mt-2 text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] '>123 Coffee lane,brew ton,<br />
                        BT,5689,Thanjavur- <br /> 6142012.</p>
                </div>
            </section>
           


            <div className='absolute -bottom-16 md:-bottom-24 lg:-bottom-36 left-0 z-50'>
                <img className=" h-auto w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"  src={coffee_beanbl} alt="coffee_beanbl" />
            </div>
            
            <div className='relative -bottom-2'>
                <img className='absolute  sm:bottom-0   sm:right-[120px] bottom-0  right-[60px]  z-50  h-auto w-8 sm:w-10 md:w-14 lg:w-14 xl:w-16 ' src={coffee} alt="coffee" />
                <img className='absolute  sm:-bottom-10 sm:right-[70px]  -bottom-5  right-[35px] z-50  h-auto w-8 sm:w-10 md:w-14 lg:w-14 xl:w-16' src={coffee} alt="coffee" />
                <img className='absolute  sm:-bottom-6  sm:right-[0px]   -bottom-3  right-[0px]  z-50  h-auto w-5 sm:w-8 md:w-8 lg:w-8 xl:w-10' src={coffee_beanh} alt="coffee_beanh" />
                <img className='absolute  sm:bottom-0   sm:right-[20px]  bottom-0  right-[10px]  z-50  h-auto w-8 sm:w-10 md:w-14 lg:w-14 xl:w-16' src={coffee} alt="coffee" />
                <img className='absolute  sm:bottom-8   sm:right-[60px]  bottom-4  right-[30px]  z-50  -rotate-45 h-auto w-8 sm:w-10 md:w-14 lg:w-14 xl:w-16' src={coffee} alt="coffee" />
                <img className='absolute  sm:bottom-16  sm:right-[15px]  bottom-8  right-[7px]   z-50  -rotate-45 h-auto w-8 sm:w-10 md:w-14 lg:w-14 xl:w-16' src={coffee} alt="coffee" />
            </div>
        </div>
    );
};

export default Contactus;

