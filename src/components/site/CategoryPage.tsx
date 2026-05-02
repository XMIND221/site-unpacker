import { useMemo, useState, useEffect } from "react";
import { type Product, products } from "@/data/products";
import { applyPageSeo } from "@/lib/seo";
import ProductCard from "./ProductCard";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type Props = {
  title: string;
  tagline: string;
  category: Product["category"];
  heroImage: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Chemin pour canonical & Open Graph (ex. /electromenager) */
  canonicalPath: string;
};

const CategoryPage = ({
  title,
  tagline,
  category,
  heroImage,
  metaTitle,
  metaDescription,
  canonicalPath,
}: Props) => {
  const items = useMemo(() => products.filter((p) => p.category === category), [category]);
  const subs = useMemo(
    () => ["Tous", ...Array.from(new Set(items.map((p) => p.subcategory)))],
    [items],
  );
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? items : items.filter((p) => p.subcategory === active);

  useEffect(() => {
    if (metaTitle) document.title = metaTitle;
    if (metaDescription) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <>
      <SiteHeader />
      <main className="pb-12">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={`Catalogue ${title} — Welma Global, WELMA Electronic Dakar`}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Catalogue</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">{tagline}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4">
          <div className="-mx-1 mb-6 mt-8 flex gap-2 overflow-x-auto pb-1">
            {subs.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  active === s
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">Aucun produit dans cette sous-catégorie.</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default CategoryPage;
