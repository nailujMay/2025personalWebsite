export default function PageTitle({titleENG = "", titleCHI = "", body = ""}: {titleENG?: string, titleCHI?: string, body?: string}){

    return (
        <div  className= "flex flex-col mx-[60px] w-[240px] md:w-[300px] lg:w-[360px]">
            <hr className = "border-3"/>
            <div className = "py-2">
            <h1 className = "font-bold">{titleENG}</h1>
            <h1>{titleCHI}</h1>
            </div>
            <hr className = "border-2"/>
            <p className = "py-2">{body}</p>
        </div>
    )
}