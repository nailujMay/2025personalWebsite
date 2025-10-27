export default function Hero() {
  // this is the hero component

  return (
    <div className="flex flex-col ml-[60px]  w-[240px] md:w-[300px] lg:w-[360px]">
      <hr className="border-3" />
      <h2 className="py-2">{"Engineer. Filmmaker. Photographer."}</h2>
      <hr className="border-2" />
      <div className="py-2">
        <h1 className="font-bold">{"Julian Yam"}</h1>
        <h1>{"任晋元"}</h1>
      </div>
      <hr className="border-3" />
      <p className="py-[60px] w-[180px] lg:w-[180px] self-end text-right whitespace-pre-line">
        {
          "A filmmaker, photographer, and engineer from Markham, Ontario. I spend my time telling stories, shooting videos, and daydreaming about my next trip. Currently doing a 9 to 5 at Tesla. "
        }
      </p>
      <p className="font-bold py-1">{"MADE IN CANADA"}</p>
      <hr className="border-3" />
      <div className="flex gap-2 py-1">
        <a href="https://www.instagram.com/julian.yam/" target="_blank">
          {"INSTAGRAM"}
        </a>
        <a
          href="https://www.linkedin.com/in/julian-yam-6130111b2/"
          target="_blank"
        >
          {"LINKEDIN"}
        </a>
        <a href="https://github.com/nailujMay" target="_blank">
          {"GITHUB"}
        </a>
        <a href="https://x.com/nailuj_may" target="_blank">
          {"TWITTER"}
        </a>
      </div>
    </div>
  );
}
