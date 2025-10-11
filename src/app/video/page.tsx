"use client"
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

const videoUrls = ["https://www.instagram.com/reel/DOnIbcxArT3/?utm_source=ig_embed&amp"]

export default function Video(){

   
    return(
        <div>
            <Navbar />
            <PageTitle titleENG = "Video" body= "This is the body of the video section. My way of connecting with the world, one shot at a time." />

            <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4 mx-[84px]">
      {videoUrls.map((url, i) => (
        <div key={i} className="overflow-hidden rounded-x ">

         <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="17" ></blockquote>
        </div>
      ))}
    </div>
        </div>
    )
}