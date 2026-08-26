import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { MenuSection } from "../components/menu-section";
import { Services } from "../components/services";
import { Reviews } from "../components/reviews";
import { OrderCta } from "../components/order-cta";
import { Location } from "../components/location";
import { Footer } from "../components/footer";
import { StickyMobileBar } from "../components/sticky-mobile-bar";

export default function Index() {
  return (
    <div className="font-body bg-[var(--cream)]">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Services />
      <Reviews />
      <OrderCta />
      <Location />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
