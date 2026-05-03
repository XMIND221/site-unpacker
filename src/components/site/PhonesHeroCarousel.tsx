import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import { whatsappOrderUrl } from "@/lib/whatsapp";

const FEATURED_SLUGS = [
  "featured-iphones-stock",
  "featured-samsung-a04s-green",
  "featured-cases-wall-1",
  "featured-cases-wall-2",
];

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

const PhonesHeroCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const slides = FEATURED_SLUGS
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  if (slides.length === 0) return null;

  return (
    <section aria-label="Mises en avant Téléphones" className="mx-auto max-w-6xl px-4 pt-6">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        className="group relative"
      >
        <CarouselContent>
          {slides.map((p) => {
            const src = resolve(p.image);
            return (
              <CarouselItem key={p.slug}>
                <article className="relative overflow-hidden rounded-3xl shadow-elegant ring-1 ring-border/40">
                  <div className="relative aspect-[16/9] w-full bg-secondary sm:aspect-[21/9]">
                    {src && (
                      <img
                        src={src}
                        alt={p.name}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                    <span className="inline-flex rounded-full bg-primary/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
                      À la une
                    </span>
                    <h2 className="mt-3 max-w-2xl text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                      {p.name}
                    </h2>
                    {p.specs[0] && (
                      <p className="mt-1.5 line-clamp-1 max-w-xl text-sm text-white/85 sm:text-base">
                        {p.specs[0]}
                      </p>
                    )}
                    <a
                      href={whatsappOrderUrl(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-smooth hover:-translate-y-0.5"
                    >
                      💬 Commander sur WhatsApp
                    </a>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-3 hidden h-10 w-10 border-0 bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 sm:flex" />
        <CarouselNext className="right-3 hidden h-10 w-10 border-0 bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 sm:flex" />

        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5 sm:hidden">
          {slides.map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/70" />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default PhonesHeroCarousel;
