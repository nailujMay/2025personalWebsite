import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

const photoFiles = [
    "DSC00638.JPG",
    "DSC01222.png",
    "DSC01230.png",
    "DSC01319.JPG",
    "DSC01324.png",
    "DSC01420.png",
    "DSC01422.png",
    "DSCF2697.png",
    "DSCF2753.png",
    "DSCF2779.png",
    "DSCF2876.png",
    "DSCF2888.png",
    "DSCF2891.jpg",
    "DSCF2898.png",
    "DSCF2922.jpg",
    "DSCF2974 1.png",
    "DSCF3009.png",
    "DSCF3020.png",
    "DSCF3028.jpg",
    "DSCF3139.png",
    "DSCF3257.jpg",
    "DSCF3260.jpg",
    "DSCF3319.png",
    "DSCF3329.png",
    "DSCF3426.png",
    "DSCF3567.png",
    "DSCF4104.png",
    "DSCF4108.png"
  ];


function Photos(){
    return(
        <div>
            <Navbar />
           <PageTitle titleENG = "Photography" titleCHI = "攝影" body= "Travelling. I can go on and on about my love of travel. From the sand dunes of Viña del Mar to the Eiffel tower in Paris, I take my camera wherever I go. Capturing moments so I never forget." />
           <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 mx-[60px] py-[60px]">
      {photoFiles.map((file, i) => (
        <div key={i} className="overflow-hidden rounded-x ">
          <Image
            src={`/images/${file}`}   // Path inside /public
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