import CategoryPage from "@/components/site/CategoryPage";
import PhonesHeroCarousel from "@/components/site/PhonesHeroCarousel";
import hero from "@/assets/cat-telephones.jpg";

const Telephones = () => (
  <CategoryPage
    title="Téléphones & Accessoires"
    tagline="Smartphones, écouteurs et accessoires sélectionnés pour vous."
    category="telephones"
    heroImage={hero}
    metaTitle="Téléphones & Accessoires — WELMA GLOBAL Dakar"
    metaDescription="Smartphones, écouteurs et accessoires mobiles à Dakar. Commandez sur WhatsApp."
    canonicalPath="/telephones"
    beforeGrid={<PhonesHeroCarousel />}
  />
);

export default Telephones;
