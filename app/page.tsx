import Banner from "@/components/banners";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Reviews from "@/components/reviews";
import Shop from "@/components/shop";
import Trust from "@/components/trust";
import Load from '@/components/load';


export default function Home() {
  return (
    <div >
       
      <Load/>
      <Header/>
      <Banner/>
      <Shop/>

      <Reviews/>

      <FAQ/>
      <Trust/>
      <Footer/>
    </div>
  );
}
