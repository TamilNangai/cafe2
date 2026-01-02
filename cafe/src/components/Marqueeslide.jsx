import React from 'react'
import s1 from '../assets/slider/s1.png'
import s2 from '../assets/slider/s2.png'
import s3 from '../assets/slider/s3.png'
import s4 from '../assets/slider/s4.png'
import s5 from '../assets/slider/s5.png'
import s6 from '../assets/slider/s6.png'

function Marqueeslide() {
  const images = [s1, s2, s3, s4, s5, s6]

  return (
    <div className="overflow-hidden group bg-white/10 border-t-2 border-b-2 border-white/20 py-4">
      <div className="flex min-w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...images, ...images].map((s, i) => (
          <img key={i} src={s} className="h-16 md:h-auto mx-6 md:mx-10 flex-shrink-0" alt={`Slider ${(i % images.length) + 1}`}/>
        ))}
      </div>
    </div>
  )
}

export default Marqueeslide
