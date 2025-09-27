
export default function Hero(){

    return(
        <div className= "flex flex-col ml-[84px] my-[21px] w-[420px] gap-[42px]" >
            <div className = "flex flex-col gap-[10px]" >
            <h1>{"Hello! I'm Julian"}</h1>
            <h2>{"Product. Marketing. Creative."}</h2>
            </div>
            <p>{"A creative person who sometimes codes, sometimes shoots video, and sometimes takes photos. Currently side questing an engineering degree at the University of Waterloo."}</p>
            <button className = "rounded-[21px] w-[168px] h-[42px] bg-text-primary text-background">{"let's chat!"}</button>

        </div>
    )

}