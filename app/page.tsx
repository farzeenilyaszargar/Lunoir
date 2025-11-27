import Banner from "@/components/HeroSection";
import FAQ from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/MainHeader";
import Reviews from "@/components/Reviews";
import Shop from "@/components/MainShop";
import Load from '@/components/StartLoad';


export default function Home() {
  return (
    <div >
      <Load />
      <Header />
      <Banner />
      <Shop />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
