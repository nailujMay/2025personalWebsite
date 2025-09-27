import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <div className = "flex flex-col ">
    <Hero />
    </div>
    </>
  );
}
