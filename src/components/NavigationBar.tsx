import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { label: "INÍCIO", path: "/" },
  { label: "PORTFÓLIO", path: "/portfolio" },
  { label: "CERTIFICADOS", path: "/certificados" },
  { label: "VISITAS TÉCNICAS", path: "/visitas" },
  { label: "CURRÍCULO", path: "/curriculo" },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full border-b border-charcoal-light sticky top-0 z-50 bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-col items-center gap-3 lg:flex-row lg:justify-between lg:gap-4">

        {/* Nome e curso */}
        <div className="flex items-center gap-3">
          <img src="/logo-black.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <div className="flex flex-col leading-tight text-center lg:text-left">
            <h1 className="font-heading text-base sm:text-xl font-semibold tracking-wide text-foreground whitespace-nowrap">
              ANA LUIZA ZOPELARI DE OLIVEIRA
            </h1>
            <span className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wide">
              Engenharia Ambiental e Sanitária
            </span>
          </div>
        </div>

        {/* Navegação — scroll horizontal no mobile */}
        <nav className="flex gap-0.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 justify-start sm:justify-center lg:justify-end">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`flex-shrink-0 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-body font-medium tracking-widest transition-all duration-200 rounded-sm whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
