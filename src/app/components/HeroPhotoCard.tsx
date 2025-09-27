import Image from "next/image";
import Link from "next/link";

interface HeroPhotoCardProps{
    image: string,
    subtitle: string,
    collecion: string,
    darkText?: boolean
}

export default function HeroPhotoCard({image, subtitle, collecion, darkText = false}: HeroPhotoCardProps){
    return(
     
            <div className="relative w-full h-[600px] rounded-2xl cursor-pointer overflow-hidden group">
                   <Link href="/photos" >
                <Image 
                    src={image} 
                    alt="hero" 
                    fill
                    className="rounded-lg object-cover z-0 trasition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 rounded-2xl z-10">
                    <h2 className={`${darkText ? "text-black" : "text-text-primary"} text-xl`}>{subtitle}</h2>
                    <p className={`${darkText ? "text-black" : "text-text-primary"} text-xl`}>{collecion}</p>
                </div>
                </Link>
            </div>
      
    )
}