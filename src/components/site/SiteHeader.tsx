import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "@/assets/welma-logo.png";
import HomeCategoryStrip from "@/components/home/HomeCategoryStrip";

const links = [
  { to: "/telephones", label: "Téléphones" },
  { to: "/electromenager", label: "Électroménager" },
  { to: "/mobilier", label: "Mobilier" },
] as const;

const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="WELMA GLOBAL" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-lg font-bold tracking-tight text-primary">WELMA GLOBAL</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  isActive
                    ? "bg-primary-soft text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {isHome ? <HomeCategoryStrip /> : null}
    </header>
  );
};

export default SiteHeader;
