import Banner from "@/components/HeroSection";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import Shop from "@/components/Shop";
import Load from '@/components/CompLoading';


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
