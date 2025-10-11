
export default function Hero(){

    return(
        <div className= "flex flex-col ml-[60px]  w-[240px] md:w-[300px] lg:w-[360px]" >
            <hr className = "border-3"/>
            <h2 className = "py-2">{"Design Engineer. Filmmaker. Photographer."}</h2>
            <hr className = "border-2"/>
            <div className = "py-2">
            <h1 className = "font-bold">{"Julian Yam"}</h1>
            <h1>{"任晋元"}</h1>
            </div>
            <hr className = "border-3"/>
            <p className = "py-[60px] w-[180px] lg:w-[240px] self-end text-right whitespace-pre-line">{"From the University of Waterloo, to Markham, Ontario, to Fremont, California. Life is crazy. But I'm all for it. Currently design engineering at Telsa 9 to 5 and filming 5 to 9."}</p>
            <p className = "font-bold py-1">{"MADE IN CANADA"}</p>
            <hr className = "border-3"/>
            <div className = "flex gap-2 py-1">
                <a href = "https://www.instagram.com/julian.yam/" target = "_blank">{"INSTAGRAM"}</a>
                <a href = "https://www.linkedin.com/in/julian-yam-6130111b2/" target = "_blank">{"LINKEDIN"}</a>
                <a href = "https://github.com/nailujMay" target = "_blank">{"GITHUB"}</a>
                <a href = "https://x.com/nailuj_may" target = "_blank">{"TWITTER"}</a>
                </div>
        </div>
    )

}