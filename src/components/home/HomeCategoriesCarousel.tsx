import { useRef } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products, type Product } from "@/data/products";
import catElectro from "@/assets/cat-electromenager.jpg";
import catMobilier from "@/assets/cat-mobilier.jpg";
import catPhones from "@/assets/cat-telephones.jpg";

const images = import.meta.glob("../../assets/products/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const resolve = (rel: string) => {
  const file = rel.split("/").pop()!;
  const k = Object.keys(images).find((x) => x.endsWith("/" + file));
  return k ? images[k] : "";
};

type CategorySlide = {
  to: string;
  label: string;
  tagline: string;
  cover: string;
  category: Product["category"];
  highlightSlugs: string[];
};

const slides: CategorySlide[] = [
  {
    to: "/telephones",
    label: "Téléphones & High-Tech",
    tagline: "iPhone 17, Galaxy S25, MacBook M4 et accessoires.",
    cover: catPhones,
    category: "telephones",
    highlightSlugs: ["featured-iphones-stock", "iphone-17-pro-max", "macbook-pro-m4", "galaxy-s25-ultra"],
  },
  {
    to: "/electromenager",
    label: "Électroménager",
    tagline: "Réfrigérateurs, TV, climatiseurs et bien plus.",
    cover: catElectro,
    category: "electromenager",
    highlightSlugs: ["hisense-rd23dc", "astech-fss690", "wiwlil-65", "beko-split"],
  },
  {
    to: "/mobilier",
    label: "Mobilier",
    tagline: "Chambres, salons et salles à manger d'exception.",
    cover: catMobilier,
    category: "mobilier",
    highlightSlugs: ["salon-broadway", "ch-df6101", "table-marbre-6places", "armoire-versace-8portes"],
  },
];

const HomeCategoriesCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section aria-label="Nos catégories" className="mx-auto max-w-6xl px-4 pt-6 sm:pt-10">
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Explorer</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Nos univers</h2>
        </div>
      </div>

      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        className="group relative"
      >
        <CarouselContent>
          {slides.map((s) => {
            const previews = s.highlightSlugs
              .map((slug) => products.find((p) => p.slug === slug))
              .filter(Boolean) as Product[];
            const count = products.filter((p) => p.category === s.category).length;

            return (
              <CarouselItem key={s.to}>
                <Link
                  to={s.to}
                  aria-label={`Voir la catégorie ${s.label} (${count} produits)`}
                  className="group/card relative block overflow-hidden rounded-3xl shadow-elegant ring-1 ring-border/40"
                >
                  <div className="relative aspect-[16/10] w-full bg-secondary sm:aspect-[21/9]">
                    <img
                      src={s.cover}
                      alt={s.label}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8">
                    <div className="max-w-xl">
                      <span className="inline-flex rounded-full bg-primary/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
                        {count} produits
                      </span>
                      <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">{s.label}</h3>
                      <p className="mt-1.5 text-sm text-white/85 sm:text-base">{s.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-smooth group-hover/card:-translate-y-0.5">
                        Découvrir →
                      </span>
                    </div>

                    <div className="hidden gap-2 sm:flex">
                      {previews.slice(0, 4).map((p) => {
                        const src = resolve(p.image);
                        return src ? (
                          <span
                            key={p.slug}
                            className="block h-16 w-16 overflow-hidden rounded-xl ring-2 ring-white/80 md:h-20 md:w-20"
                          >
                            <img src={src} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-3 hidden h-10 w-10 border-0 bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 sm:flex" />
        <CarouselNext className="right-3 hidden h-10 w-10 border-0 bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 sm:flex" />
      </Carousel>
    </section>
  );
};

export default HomeCategoriesCarousel;
