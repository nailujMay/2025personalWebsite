import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

const photoFiles = ["../images/mainPage/DSCF6228.jpg", 
    "../images/DSCF2876.jpg", "../images/DSCF6098.jpg", "../images/DSCF7232.jpg"];



function Photos(){
    return(
        <div>
            <Navbar />
           <PageTitle title = "Photos" subtitle = "a snapshot of our world, a moment in time" />

           <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 mx-[84px]">
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