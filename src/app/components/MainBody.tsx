import HeroPhotoCard from "./HeroPhotoCard";
import HeroTextCard from "./HeroTextCard";


export default function MainBody(){
    return(
        <div className = "flex flex-col gap-4">
        <div className = "flex gap-4">
            <HeroTextCard title = "Photos" body = "a snapshot of our world, a moment in time" fontColor = "text-text-primary" backgroundColor = "bg-red-600"/>
            <HeroPhotoCard image = "/images/mainPage/DSCF6228.jpg" subtitle = "san francisco, USA" collecion = "california25" />
        </div >
        <div className = "flex gap-4">
        <HeroPhotoCard image = "/images/mainPage/DSCF2876.jpg" subtitle = "venice, italy" collecion = "euro2425" darkText = {true} />
        <HeroPhotoCard image = "/images/mainPage/DSCF6098.jpg" subtitle = "san francisco, USA" collecion = "california25" darkText = {true} />
        </div>
        </div>
    )
}