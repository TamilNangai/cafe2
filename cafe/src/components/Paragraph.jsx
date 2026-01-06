export default function Paragraph({  title, description, image, imagePosition = "left", imageline, paragraph, imgtitle, imageClass, textclass, main, textcolor, imgdiv, showImageName = false}) {
  return (
    <div className={`flex flex-col md:flex-row relative items-center gap-3   ${main} ${imagePosition === "right" ? "md:flex-row-reverse " : ""}`}>
        <div className={` ${imgdiv} `}>
      {image && (<div className={`relative overflow-hidden rounded-xl ${showImageName ? "group" : "" }`}>  
      <img  src={image} alt={title} className={`  ${imageClass}  rounded-xl ${showImageName ? "transition-transform duration-500 group-hover:scale-105" : ""}`} />
      {showImageName && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10">
          <span className={`${textcolor} relative -bottom-24 text-[60px] alex-brush-regular drop-shadow-lg`}>{imgtitle}</span>
        </div>
      )}</div>
      )}
      </div>
      
      <div className={`flex flex-col items-center gap-4 px-4  ${textclass}`}>
        <div className="flex flex-col items-center">
          <h2 className="ABeeZee font-normal text-[#7A2121] text-center text-[44px]">{title}</h2>
          {imageline && (<img src={imageline}  alt={title} className="w-auto h-50 rotate-180" /> )}
        </div>
        <p className={`Bellefair font-normal text-[#832C2C]  ${paragraph}`}>{description}</p>
      </div>
      
    </div>
  );
}