import Navbar from "../components/Navbar";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[20px] ml-[60px] md:flex-row">
        <Image
          src="/profile.jpg"
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
            Julian is a engineer and filmmaker from Markham, Ontario. When he’s
            not at work he spends his time running around (sometime literally)
            with a camera to capture the world’s most fascinating stories. In
            his down time he is watching movies, trying new recipes and
            exploring the newest parts of whatever city he is in.
            <br />
            <br />
            Currently exploring documentary filmmaking, travel, social
            entrepreneurship and finding his personal legend (iykyk).
            <br />
            <br />
            Wishing you a fantastic day with a great adventure.
          </p>
          <hr className="border-1" />
        </div>
      </div>
    </div>
  );
};

export default Page;
