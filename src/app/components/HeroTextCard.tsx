import Link from "next/link";

interface HeroTextCardProps{
    title?:string,
    body?: string,
    fontColor?: string,
    backgroundColor?: string
}
function HeroTextCard({title, body, fontColor = "text-foreground", backgroundColor = "bg-primary"}: HeroTextCardProps){
    return(
        <div className = {`flex flex-col rounded-2xl w-1/3 h-[600px] ${backgroundColor}`}>

            <div className = "flex flex-col p-6 justify-between w-full h-full">
                <div className = "flex justify-between">
            {title&& <h1 className = {`text-4xl  text-left ${fontColor}`}>{title}</h1>}
            <Link href="/photos"> <p>{"arrow"}</p></Link>
           
            </div>
           {body&&  <p className = {`text-6xl font-medium text-left ${fontColor}`}>{body}</p>}
           </div>
        </div>
    )
}

export default HeroTextCard;