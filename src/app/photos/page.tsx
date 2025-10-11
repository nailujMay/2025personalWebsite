import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

const photoFiles = [
    "../images/DSC00638.JPG",
    "../images/DSC01222.png",
    "../images/DSC01230.png",
    "../images/DSC01319.JPG",
    "../images/DSC01324.png",
    "../images/DSC01420.png",
    "../images/DSC01422.png",
    "../images/DSCF2697.png",
    "../images/DSCF2753.png",
    "../images/DSCF2779.png",
    "../images/DSCF2876.jpg",
    "../images/DSCF2888.png",
    "../images/DSCF2891.jpg",
    "../images/DSCF2898.png",
    "../images/DSCF2922.jpg",
    "../images/DSCF2974 1.png",
    "../images/DSCF3009.png",
    "../images/DSCF3020.png",
    "../images/DSCF3028.jpg",
    "../images/DSCF3139.png",
    "../images/DSCF3257.jpg",
    "../images/DSCF3260.jpg",
    "../images/DSCF3319.png",
    "../images/DSCF3329.png",
    "../images/DSCF3426.png",
    "../images/DSCF3567.png",
    "../images/DSCF4104.png",
    "../images/DSCF4108.png"
  ];


function Photos(){
    return(
        <div>
            <Navbar />
           <PageTitle titleENG = "Photography" titleCHI = "摄影" body= "Sand dunes in Peru, canals in Venice, cobble stone streets in Milan, and skyscrapers in NYC. Taking my camera where ever I go. Capturing moments so I'll never forget." />
           <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 mx-[60px] py-[60px]">
      {photoFiles.map((file, i) => (
        <div key={i} className="overflow-hidden rounded-x ">
          <Image
            src={`/photos/${file}`}   // Path inside /public
            alt={`Photo ${i}`}
            width={800}               // Give a default width
            height={600}              // Give a default height
            className="w-full h-auto "
          />
        </div>
      ))}
    </div>
        </div>
    )
}

export default Photos;