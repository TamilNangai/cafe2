import { useNavigate } from "react-router-dom";
import coffee from '../assets/btn/leave.png'
export const Viewbtn = ({ to, label = "Explore" }) => {
const navigate = useNavigate();
return (   
    <div className="flex justify-center items-center  m-5">
      <button onClick={() => navigate(to, { state: { animate: true } })} className="lg:w-[173px] lg:h-[60px] md:w-[140px] md:h-[43px] w-[80px] h-[30px] rounded-[10.82px] md:rounded-[12.82px] bg-[#835C3B] hover:bg-[#a95a14] flex justify-around items-center relative hover:drop-shadow-[0_4px_10px_rgb(169,79,6)] ">
        <span className=" md:w-[48px] md:h-[35px] font-normal text-white lg:text-[35px] md:text-[25px] text-[14px] flex items-center justify-center salsa-regular absolute md:left-8 md:top-1 lg:left-10 lg:top-3 left-4">{label}</span>
        <span className="rotate-[-50deg] absolute md:right-2 right-[5px]"><img className="lg:w-[55px] md:w-[40px] w-[30px] h-auto" src={coffee} alt={coffee} /></span>
      </button>
    </div>
  );
};