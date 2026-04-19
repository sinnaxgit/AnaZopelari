import { Download, ExternalLink, FileText } from "lucide-react";

const CurriculoPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 mb-8 text-sage opacity-60">
        <FileText size={14} strokeWidth={1.2} />
        <span className="text-[10px] font-body tracking-widest uppercase">Currículo</span>
      </div>

      <h2 className="font-heading text-3xl font-semibold text-foreground mb-8">Currículo</h2>

      <div className="max-w-md mx-auto bento-card flex flex-col items-center text-center gap-6 animate-fade-in">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Acesse meu perfil na Plataforma Lattes para mais informações sobre minha trajetória acadêmica.
        </p>

        <a
          href="http://lattes.cnpq.br/1961269186839067"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground font-body text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:opacity-90"
        >
          <ExternalLink size={14} strokeWidth={1.5} />
          Acessar Lattes
        </a>
      </div>
    </div>
  );
};

export default CurriculoPage;
