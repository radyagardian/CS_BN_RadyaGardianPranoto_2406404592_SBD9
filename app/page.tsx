import MainBanner from "../components/MainBanner";
import ThinBanner from "../components/ThinBanner";
import PromoSection from "../components/PromoSection";

export default function Home() {
  return (
    <div className="w-full">
      <MainBanner />
      <ThinBanner />
      <PromoSection />
    </div>
  );
}