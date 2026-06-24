import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import PhotoImage from "../components/PhotoImage";

const photoFiles = [
  "DSC00638.JPG",
  "DSC01222.jpg",
  "DSC01230.jpg",
  "DSC01319.JPG",
  "DSC01324.jpg",
  "DSC01420.jpg",
  "DSC01422.jpg",
  "DSCF2697.jpg",
  "DSCF2753.jpg",
  "DSCF2779.jpg",
  "DSCF2876.jpg",
  "DSCF2888.jpg",
  "DSCF2891.jpg",
  "DSCF2898.jpg",
  "DSCF2922.jpg",
  "DSCF2974 1.jpg",
  "DSCF3009.jpg",
  "DSCF3020.jpg",
  "DSCF3028.jpg",
  "DSCF3139.jpg",
  "DSCF3257.jpg",
  "DSCF3260.jpg",
  "DSCF3319.jpg",
  "DSCF3329.jpg",
  "DSCF3426.jpg",
  "DSCF3567.jpg",
  "DSCF4104.jpg",
  "DSCF4108.jpg",
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
        {photoFiles.map((file, i) => (
          <div key={i} className="overflow-hidden rounded-x ">
            <PhotoImage src={`/images/${file}`} alt={`Photo ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
