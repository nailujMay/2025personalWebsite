"use client";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import videoUrls from "./vid-thumbnails.json";
import Image from "next/image";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VideoThumbnail {
  title: string;
  date: string;
  src_url: string;
  thumbnail_path: string;
}

const thumbnails: VideoThumbnail[] = videoUrls.videos;

export default function Video() {
  return (
    <div>
      <Navbar />
      <PageTitle
        titleENG="Video"
        body="My latest endeavour into the media world. Using my skills to promote hackathons and run clubs. Hit me up if you ever want to shoot :)"
      />

      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 mx-[60px] py-[60px]">
        {thumbnails.map((thumbnail, i) => (
          <a
            key={i}
            href={thumbnail.src_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden relative group cursor-pointer"
          >
            <Image
              src={thumbnail.thumbnail_path}
              alt={`Video ${i}`}
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black transition-all duration-300 flex align opacity-0 group-hover:opacity-60 pl-2 pt-2" />
            <div className="absolute inset-0 flex flex-col gap-1 pl-4 pt-4 pointer-events-none opacity-0 group-hover:opacity-100 w-70">
              <p className="!text-background text-lg ">{thumbnail.title}</p>
              <p className="!text-background text-sm ">{thumbnail.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
