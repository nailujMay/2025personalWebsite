export default function PageTitle({title = "", subtitle = "", body = ""}: {title?: string, subtitle?: string, body?: string}){

    return (
        <div  className= "flex flex-col ml-[84px] my-[21px] w-[420px] gap-[42px]">
            <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            </div>

            <p>{body}</p>



        </div>
    )
}