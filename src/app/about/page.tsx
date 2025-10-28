import Navbar from "../components/Navbar";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[20px] ml-[60px] md:flex-row">
        <Image
          src={"/images/profile.JPG"}
          alt="About"
          width={800}
          height={600}
          className="w-[240px] h-auto md:w-[300px] "
        />
        <div className="flex flex-col gap-2 w-[240px] md:w-[300px] lg:w-[360px]">
          <p className="italic pb-[20px]">
            “and when you want something all the universe conspires into helping
            you achieve it”
            <br />
            <br />
            ~the alchemist
          </p>
          <hr className="border-1" />
          <p className="py-[60px]">
            Julian is an engineer and filmmaker from Markham, Ontario. When he’s
            not at work, he’s often running around (sometimes literally) with a
            camera, capturing the world’s most fascinating stories. In his
            downtime, he enjoys watching movies, trying new recipes, and
            exploring new corners of whatever city he’s in.
            <br />
            <br />
            Currently exploring documentary filmmaking, travel, social
            entrepreneurship and finding his personal legend (iykyk).
            <br />
            <br />
            <strong>Wishing you a fantastic day with a great adventure.</strong>
          </p>
          <hr className="border-1" />
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
      </div>
    </div>
  );
};

export default Page;
