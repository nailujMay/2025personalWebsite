"use client"
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";


const videoUrls = ["https://www.instagram.com/reel/DOnIbcxArT3/?utm_source=ig_embed&amp"]

export default function Video(){

    useEffect(() => {
        // Load Instagram embed script once
        if (!document.getElementById("instagram-embed-script")) {
          const script = document.createElement("script");
          script.id = "instagram-embed-script";
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          // Re-process if script already loaded
          // @ts-expect-error
          if (window.instgrm) window.instgrm.Embeds.process();
        }
      }, []);
    return(
        <div>
            <Navbar />
            <PageTitle title = "Video" subtitle = "a snapshot of our world, a moment in time" body= "This is the body of the video section. My way of connecting with the world, one shot at a time." />

            <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4 mx-[84px]">
      {videoUrls.map((url, i) => (
        <div key={i} className="overflow-hidden rounded-x ">
         {/* <iframe src={url} title={`Video ${i}`} className="w-full h-auto " /> */}

         <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="17" ></blockquote>
        </div>
      ))}
    </div>
        </div>
    )
}