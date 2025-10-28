"use client";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import videoUrls from "./vid-thumbnails.json";
import Image from "next/image";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
        titleCHI="影片"
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
            <div className="absolute inset-0 bg-black transition-all duration-300 flex align opacity-0 group-hover:opacity-60 py-2 px-2" />
            <div className="absolute inset-0 flex justify-between align-top gap-1 py-4 px-4 pointer-events-none opacity-0 group-hover:opacity-100 w-full">
              <div className="flex flex-col gap-1">
                <p className="!text-[#FFFEF8] text-lg ">{thumbnail.title}</p>
                <p className="!text-[#FFFEF8] text-lg ">{thumbnail.date}</p>
              </div>
              <ArrowOutwardIcon className="text-[#FFFEF8]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
