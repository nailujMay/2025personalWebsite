import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import PhotoImage from "../components/PhotoImage";

const photoFiles = [
  { file: "DSC00638.JPG", width: 2400, height: 1599 },
  { file: "DSC01222.jpg", width: 2400, height: 1599 },
  { file: "DSC01230.jpg", width: 2400, height: 1600 },
  { file: "DSC01319.JPG", width: 2400, height: 1600 },
  { file: "DSC01324.jpg", width: 2400, height: 1599 },
  { file: "DSC01420.jpg", width: 2400, height: 1599 },
  { file: "DSC01422.jpg", width: 2400, height: 1600 },
  { file: "DSCF2697.jpg", width: 1601, height: 2400 },
  { file: "DSCF2753.jpg", width: 1601, height: 2400 },
  { file: "DSCF2779.jpg", width: 1600, height: 2400 },
  { file: "DSCF2876.jpg", width: 2400, height: 1599 },
  { file: "DSCF2888.jpg", width: 1601, height: 2400 },
  { file: "DSCF2891.jpg", width: 2400, height: 1600 },
  { file: "DSCF2898.jpg", width: 1600, height: 2400 },
  { file: "DSCF2922.jpg", width: 2400, height: 1600 },
  { file: "DSCF2974 1.jpg", width: 1600, height: 2400 },
  { file: "DSCF3009.jpg", width: 2400, height: 1599 },
  { file: "DSCF3020.jpg", width: 1670, height: 2400 },
  { file: "DSCF3028.jpg", width: 2400, height: 1599 },
  { file: "DSCF3139.jpg", width: 2400, height: 1600 },
  { file: "DSCF3257.jpg", width: 2400, height: 1600 },
  { file: "DSCF3260.jpg", width: 2400, height: 1600 },
  { file: "DSCF3319.jpg", width: 2400, height: 1600 },
  { file: "DSCF3329.jpg", width: 2400, height: 1546 },
  { file: "DSCF3426.jpg", width: 1600, height: 2400 },
  { file: "DSCF3567.jpg", width: 1599, height: 2400 },
  { file: "DSCF4104.jpg", width: 2400, height: 1600 },
  { file: "DSCF4108.jpg", width: 1600, height: 2400 },
];

function Photos() {
  return (
    <div>
      <Navbar />
      <PageTitle
        titleENG="Photography"
        titleCHI="攝影"
        body="Travelling. I can go on and on about my love of travel. From the sand dunes of Viña del Mar to the Eiffel tower in Paris, I take my camera wherever I go. Capturing moments so I never forget."
      />
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4 mx-[60px] py-[60px]">
        {photoFiles.map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-x ">
            <PhotoImage
              src={`/images/${photo.file}`}
              alt={`Photo ${i}`}
              width={photo.width}
              height={photo.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
