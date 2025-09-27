import Marquee from "react-fast-marquee";

export default function Headline(){
    return(
        <div className = "flex flex-col gap-2 py-10">
            <Marquee autoFill = {true} >
                    <p className = "text-3xl py-2 mx-1"> {"product. marketing. creative."}</p>
            </Marquee>
                <Marquee autoFill = {true} >
                    <p className = "text-3xl py-2 mx-1">{"product. marketing. creative."}</p>
            </Marquee>
       </div>
    )
}