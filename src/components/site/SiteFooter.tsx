import { Link } from "react-router-dom";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, whatsappContactUrl } from "@/lib/whatsapp";

const SiteFooter = () => (
  <footer className="mt-24 border-t border-border bg-secondary/40">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-bold text-primary">WELMA GLOBAL</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Votre partenaire en électroménager, mobilier et accessoires mobiles à Dakar.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h4>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>📍 Ouest Foire, Dakar — Sénégal</li>
          <li>
            📞{" "}
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-primary">
              {WHATSAPP_DISPLAY}
            </a>
          </li>
          <li>
            <a href={whatsappContactUrl()} target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:underline">
              💬 Discuter sur WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Catégories</h4>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li><Link to="/telephones" className="hover:text-primary">Téléphones & Accessoires</Link></li>
          <li><Link to="/electromenager" className="hover:text-primary">Électroménager</Link></li>
          <li><Link to="/mobilier" className="hover:text-primary">Mobilier</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} WELMA GLOBAL. Tous droits réservés.
    </div>
  </footer>
);

export default SiteFooter;
