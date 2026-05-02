import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ProductCard from "@/components/site/ProductCard";
import { applyPageSeo } from "@/lib/seo";
import storefront from "@/assets/welma-storefront.png";
import banner from "@/assets/welma-banner.jpg";
import { whatsappContactUrl } from "@/lib/whatsapp";
import { products } from "@/data/products";

const featured = [
  products.find((p) => p.slug === "phone-flagship-black"),
  products.find((p) => p.slug === "hisense-rd23dc"),
  products.find((p) => p.slug === "salon-broadway"),
  products.find((p) => p.slug === "phone-overear"),
].filter(Boolean) as typeof products;

const Index = () => {
  useEffect(() => {
    applyPageSeo({
      title: "Welma Global — WELMA Electronic | Électroménager, mobilier & téléphones, Dakar",
      description:
        "Welma Global, WELMA Electronic à Ouest Foire, Dakar : électroménager, mobilier, smartphones et accessoires. Commandez par WhatsApp, livraison à Dakar.",
      path: "/",
    });
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full gradient-primary opacity-30 blur-3xl" />
            <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-whatsapp opacity-20 blur-3xl" />
            <div className="absolute inset-0 gradient-hero" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:py-12 md:grid-cols-2 md:gap-8 md:py-16">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Dakar — Sénégal
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl">
                Votre maison équipée, simplement
              </h1>
              <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <span className="bg-clip-text text-transparent gradient-primary">WELMA GLOBAL</span>
                <span className="mx-2 text-muted-foreground/40">·</span>
                <span className="text-lg font-semibold text-foreground sm:text-xl md:text-2xl">WELMA Electronic</span>
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-5 md:text-xl">
                Électroménager, mobilier et téléphones sélectionnés pour vous à Dakar.
                <span className="font-semibold text-foreground"> Une commande, un message WhatsApp.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                <Link
                  to="/electromenager"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-elegant transition-smooth hover:-translate-y-0.5 hover:shadow-glow sm:px-6 sm:py-3.5"
                >
                  Voir le catalogue
                  <span className="transition-smooth group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
                <a
                  href={whatsappContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter WELMA GLOBAL sur WhatsApp"
                  className="inline-flex items-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:opacity-95 sm:px-6 sm:py-3.5"
                >
                  <span aria-hidden="true">💬</span> WhatsApp
                </a>
              </div>

              <div className="mt-8 grid max-w-md grid-cols-3 gap-3 sm:gap-4 md:mt-10">
                {[
                  { v: `${products.length}+`, l: "Produits" },
                  { v: "3", l: "Catégories" },
                  { v: "24/7", l: "WhatsApp" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border/60 bg-card/80 p-3 text-center backdrop-blur">
                    <div className="text-lg font-bold text-primary sm:text-xl md:text-2xl">{s.v}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl md:max-h-[min(52vh,28rem)]">
              <div className="absolute -inset-3 rounded-[2rem] gradient-primary opacity-30 blur-2xl sm:-inset-4" aria-hidden="true" />
              <div className="relative max-h-[min(48vh,22rem)] overflow-hidden rounded-2xl border border-border/60 shadow-elegant sm:max-h-[min(50vh,26rem)] sm:rounded-[2rem] md:max-h-none">
                <img
                  src={storefront}
                  alt="Devanture illuminée de la boutique WELMA Electronic à Ouest Foire, Dakar, de nuit, avec enseignes néon bleues et rouges et clients à l'intérieur"
                  className="block h-full max-h-[min(48vh,22rem)] w-full object-cover sm:max-h-[min(50vh,26rem)] md:max-h-none"
                  width={1200}
                  height={900}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white sm:text-xs">Notre boutique</p>
                  <p className="text-base font-bold text-white sm:text-lg">Ouest Foire — Dakar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-2 sm:pt-4">
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-soft sm:rounded-3xl">
            <img
              src={banner}
              alt="Bannière WELMA Électronique : la technologie au service de votre quotidien — Adresse Ouest Foire, Téléphone 776 508 080"
              className="block w-full object-cover"
              width={1600}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Sélection</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Produits vedettes</h2>
              </div>
              <Link to="/electromenager" className="hidden text-sm font-semibold text-primary hover:underline md:inline">
                Tout voir →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pourquoi WELMA</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Une expérience d'achat simple</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: "📦", t: "Large choix", d: "Réfrigérateurs, TV, mobilier, téléphones et bien plus." },
              { i: "💬", t: "Commande WhatsApp", d: "Un message suffit pour passer commande, sans paperasse." },
              { i: "🚚", t: "Livraison à Dakar", d: "Livraison rapide dans toute la région de Dakar." },
            ].map((f) => (
              <div
                key={f.t}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full gradient-primary opacity-0 blur-2xl transition-smooth group-hover:opacity-30" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-2xl">
                  {f.i}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-primary p-10 text-center shadow-elegant md:p-16">
            <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <h2 className="relative text-3xl font-bold text-primary-foreground md:text-4xl">
              Prêt à passer commande ?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/90">
              Notre équipe répond à vos questions et finalise votre commande sur WhatsApp en quelques minutes.
            </p>
            <a
              href={whatsappContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex items-center gap-2 rounded-2xl bg-background px-7 py-4 text-base font-semibold text-primary shadow-glow transition-smooth hover:-translate-y-0.5"
            >
              💬 Démarrer la conversation
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
