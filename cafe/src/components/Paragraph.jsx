export default function Paragraph({  title, description, image, imagePosition = "left", imageline, paragraph, imgtitle, imageClass, textclass, main, textcolor, imgdiv, parahead, showImageName = false}) {
  return (
    <div className={`flex flex-row relative items-center gap-1 md:gap-3   ${main} ${imagePosition === "right" ? "flex-row-reverse " : ""}`}>
        <div className={` ${imgdiv} `}>
      {image && (<div className={`relative overflow-hidden rounded-xl ${showImageName ? "group" : "" }`}>  
      <img  src={image} alt={title} className={`  ${imageClass}  rounded-xl ${showImageName ? "transition-transform duration-500 group-hover:scale-105" : ""}`} />
      {showImageName && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10">
          <span className={`${textcolor} relative xl:-bottom-24 xl:text-[60px] lg:-bottom-8 lg:text-[40px] md:-bottom-8 md:text-[30px] -bottom-6 text-[20px] alex-brush-regular drop-shadow-lg`}>{imgtitle}</span>
        </div>
      )}</div>
      )}
      </div>
      
      <div className={`flex flex-col items-center md:gap-4 p-0 xl:px-4  ${textclass}`}>
        <div className="flex flex-col items-center">
          <h2 className={`ABeeZee font-normal text-[#7A2121] text-center  md:text-[23px] lg:text-[31px] xl:text-[43px] ${parahead}`}>{title}</h2>
          {imageline && (<img src={imageline}  alt={title} className=" rotate-180 w-40 md:w-52 lg:w-96 h-50" /> )}
        </div>
        <p className={`Bellefair font-normal text-[#832C2C] lg:px-2   ${paragraph}`}>{description}</p>
      </div>
      
    </div>
  );
}