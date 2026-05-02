import { Link } from "react-router-dom";
import catElectro from "@/assets/cat-electromenager.jpg";
import catMobilier from "@/assets/cat-mobilier.jpg";
import catPhones from "@/assets/cat-telephones.jpg";
import { products } from "@/data/products";

const categories = [
  {
    to: "/electromenager",
    label: "Électroménager",
    desc: "Réfrigérateurs, TV, climatiseurs…",
    img: catElectro,
    count: products.filter((p) => p.category === "electromenager").length,
  },
  {
    to: "/mobilier",
    label: "Mobilier",
    desc: "Chambres, salons, tables…",
    img: catMobilier,
    count: products.filter((p) => p.category === "mobilier").length,
  },
  {
    to: "/telephones",
    label: "Téléphones",
    desc: "Smartphones & accessoires",
    img: catPhones,
    count: products.filter((p) => p.category === "telephones").length,
  },
];

/** Bloc des 3 catégories — affiché sous la barre logo (header accueil). */
const HomeCategoryStrip = () => (
  <div id="nos-categories" className="border-t border-border/40 bg-background/95 pb-2.5 pt-2 backdrop-blur-lg sm:pb-3 sm:pt-3">
    <div className="mx-auto max-w-6xl px-2.5 sm:px-4">
      <div className="mb-1.5 flex items-baseline justify-between gap-2 sm:mb-3">
        <h2 className="text-xs font-bold tracking-tight text-foreground sm:text-base md:text-lg">Nos catégories</h2>
        <p className="hidden text-xs text-muted-foreground sm:block md:text-sm">Un clic par univers</p>
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
        {categories.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            aria-label={`${c.label}, ${c.count} produits`}
            className="group relative block min-h-[132px] h-[min(46vw,12rem)] max-h-[14rem] overflow-hidden rounded-lg shadow-soft ring-1 ring-border/40 transition-smooth hover:-translate-y-0.5 hover:shadow-elegant active:opacity-95 sm:min-h-0 sm:h-[min(36vw,13rem)] sm:max-h-[15rem] sm:rounded-2xl md:aspect-[4/5] md:h-auto md:max-h-none md:rounded-3xl"
          >
            <img
              src={c.img}
              alt={c.label}
              className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <span className="absolute right-0.5 top-0.5 max-w-[calc(100%-0.5rem)] truncate rounded-full bg-background/90 px-1 py-0.5 text-[9px] font-semibold text-primary backdrop-blur sm:right-2 sm:top-2 sm:max-w-none sm:px-2.5 sm:py-0.5 sm:text-xs md:right-3 md:top-3 md:px-3 md:py-1">
              <span className="sm:hidden">{c.count} prod.</span>
              <span className="hidden sm:inline">{c.count} produits</span>
            </span>
            <div className="absolute inset-x-0 bottom-0 p-1.5 pb-2 text-white sm:p-3 md:p-6">
              <h3 className="text-[10px] font-bold leading-tight sm:text-base md:text-2xl">{c.label}</h3>
              <p className="mt-0.5 line-clamp-2 text-[8px] leading-snug opacity-90 sm:mt-1 sm:text-xs md:text-sm">{c.desc}</p>
              <span className="mt-1 inline-flex items-center gap-0.5 rounded-full bg-white/15 px-1.5 py-0.5 text-[8px] font-semibold backdrop-blur transition-smooth group-hover:bg-white group-hover:text-primary sm:mt-2 sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-xs md:mt-4 md:px-3 md:py-1.5 md:text-sm">
                Découvrir →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default HomeCategoryStrip;
