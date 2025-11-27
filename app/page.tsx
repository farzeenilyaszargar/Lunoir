import Banner from "@/components/Banner";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import Shop from "@/components/Shop";
import Trust from "@/components/Trust";
import Load from '@/components/CompLoading';
import Shop2 from "@/components/Shop2";


export default function Home() {
  return (
    <div >
      <Load/>
      <Header/>
      <Banner/>
      <Shop/>
      {/* <Shop2/> */}
      <Reviews/>
      <FAQ/>
      {/*<Trust/>*/}
      <Footer/>
    </div>
  );
}
