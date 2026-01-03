import s1 from "../assets/slider/s1.png";
import s2 from "../assets/slider/s2.png";
import s3 from "../assets/slider/s3.png";
import s4 from "../assets/slider/s4.png";
import s5 from "../assets/slider/s5.png";
import s6 from "../assets/slider/s6.png";

function Marqueeslide() {
  const images = [s1, s2, s3, s4, s5, s6];

  return (
    <div className="overflow-hidden bg-white/10 py-4">
      <div className="marquee-track">
        {[...images, ...images].map(
          (img, i) => (<img key={i} src={img} className="w-auto h-40 md:h-52 lg:h-auto mx-2 md:mx-3 lg:mx-6 flex-shrink-0" alt="slide"/>
        ))}
      </div>
      </div>
  );
}

export default Marqueeslide;
