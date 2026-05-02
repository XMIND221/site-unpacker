import type { Product } from "@/data/products";
import { whatsappOrderUrl } from "@/lib/whatsapp";
import { WhatsappIcon } from "./WhatsappFloating";

const images = import.meta.glob("../../assets/products/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function resolveImage(rel: string) {
  const filename = rel.split("/").pop()!;
  const key = Object.keys(images).find((k) => k.endsWith("/" + filename));
  return key ? images[key] : "";
}

const ProductCard = ({ product }: { product: Product }) => {
  const src = resolveImage(product.image);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {src && (
          <img
            src={src}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-primary backdrop-blur">
          {product.subcategory}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-base font-semibold leading-tight text-foreground">{product.name}</h3>
        {product.specs.length > 0 && (
          <ul className="space-y-1 text-sm text-muted-foreground">
            {product.specs.slice(0, 3).map((s, i) => (
              <li key={i} className="line-clamp-1">• {s}</li>
            ))}
          </ul>
        )}
        <a
          href={whatsappOrderUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-smooth hover:opacity-90"
        >
          <WhatsappIcon className="h-5 w-5" />
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
