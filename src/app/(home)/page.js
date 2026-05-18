// import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Featured from "@/components/shared/Featured";
import QurbaniTips from "@/components/shared/QurbaniTips";


export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Featured/>
      <QurbaniTips/>
      <Footer/>
    </div>
  );
}
