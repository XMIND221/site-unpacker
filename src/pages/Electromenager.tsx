import CategoryPage from "@/components/site/CategoryPage";
import hero from "@/assets/cat-electromenager.jpg";

const Electromenager = () => (
  <CategoryPage
    title="Électroménager"
    tagline="Réfrigérateurs, téléviseurs, climatiseurs et équipements de qualité."
    category="electromenager"
    heroImage={hero}
    metaTitle="Électroménager — WELMA GLOBAL Dakar"
    metaDescription="Réfrigérateurs, congélateurs, téléviseurs, climatiseurs et plus, livrés à Dakar."
    canonicalPath="/electromenager"
  />
);

export default Electromenager;
