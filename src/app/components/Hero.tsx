
export default function Hero(){

    return(
        <div className= "flex flex-col ml-[60px] w-[360px]" >
            <hr className = "border-3"/>
            <h2 className = "py-2">{"Design Engineer. Filmmaker. Photographer."}</h2>
            <hr className = "border-2"/>
            <div className = "py-2">
            <h1 className = "font-bold">{"Julian Yam"}</h1>
            <h1>{"任晋元"}</h1>
            </div>
            <hr className = "border-3"/>
            <p className = "py-[60px] w-[240px] self-end text-right">{"A creative person who sometimes codes, sometimes shoots video, and sometimes takes photos. Currently side questing an engineering degree at the University of Waterloo."}</p>
            <p className = "font-bold py-1">{"MADE IN CANADA"}</p>
            <hr className = "border-3"/>
            <div className = "flex gap-2 py-1">
                <a href = "https://www.instagram.com/julian.yam/" target = "_blank">{"INSTAGRAM"}</a>
                <a href = "https://www.linkedin.com/in/julian-yam-6130111b2/" target = "_blank">{"LINKEDIN"}</a>
                <a href = "https://www.github.com/julian-yam" target = "_blank">{"GITHUB"}</a>
                <a href = "https://www.twitter.com/julian-yam" target = "_blank">{"TWITTER"}</a>
                </div>

            
        </div>
    )

}