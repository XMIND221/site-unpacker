import CategoryPage from "@/components/site/CategoryPage";
import hero from "@/assets/cat-mobilier.jpg";

const Mobilier = () => (
  <CategoryPage
    title="Mobilier"
    tagline="Chambres à coucher, salons et tables pour habiller votre intérieur."
    category="mobilier"
    heroImage={hero}
    metaTitle="Mobilier — WELMA GLOBAL Dakar"
    metaDescription="Chambres à coucher, salons, tables — du mobilier élégant pour votre intérieur à Dakar."
    canonicalPath="/mobilier"
  />
);

export default Mobilier;
