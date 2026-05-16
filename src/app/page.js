import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      Homepage
      <Footer/>
    </div>
  );
}
