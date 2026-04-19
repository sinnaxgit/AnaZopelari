import { Flower2, Leaf, Download, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => (
  <div className="bento-card flex flex-col items-center text-center gap-4 animate-fade-in w-full h-full" style={{ animationDelay: "0.1s" }}>
    <div className="flex items-center gap-2 self-start text-sage opacity-60">
      <Flower2 size={16} strokeWidth={1.8} />
      <span className="text-[10px] font-body tracking-widest uppercase">Perfil</span>
    </div>

    <div className="w-28 h-28 rounded-full border-2 border-charcoal-light overflow-hidden flex-shrink-0">
      <img
        src="/perfil2.jpeg"
        alt="Ana Luiza Zopelari"
        className="w-full h-full object-cover object-top"
      />
    </div>

    <div className="space-y-1">
      <h2 className="font-heading text-2xl font-semibold text-foreground">Ana Luiza Zopelari de Oliveira</h2>
      <p className="font-body text-sm text-muted-foreground">Estudante de Eng. Ambiental e Sanitária</p>
    </div>

    <div className="w-full border-t border-charcoal-light pt-4 space-y-2">
      <InfoRow label="Universidade" value="CEFET-MG" />
      <InfoRow label="Localização" value="Belo Horizonte, MG" />
    </div>

    {/* Buttons */}
    <div className="w-full flex flex-col gap-2 pt-2">
      <a
        href="http://lattes.cnpq.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground font-body text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:opacity-90"
      >
        <ExternalLink size={14} strokeWidth={1.5} />
        Ver Lattes
      </a>
    </div>
  </div>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-xs font-body">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-foreground font-medium">{value}</span>
  </div>
);

const IntroCard = () => (
  <div className="bento-card flex flex-col gap-4 animate-fade-in w-full h-full" style={{ animationDelay: "0.2s" }}>
    <div className="flex items-center gap-2 text-sage opacity-60">
      <Leaf size={14} strokeWidth={1.2} />
      <span className="text-[10px] font-body tracking-widest uppercase">Introdução</span>
    </div>

    <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
      Oi, eu sou a <span className="text-primary">Ana Luiza</span>!
    </h2>

    <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
      <p>
        Sou estudante de Engenharia Ambiental e Sanitária no CEFET-MG e me interesso por compreender o meio ambiente de forma integrada, envolvendo desde as questões sociais até os processos microbiológicos, ecológicos e de tratamento que sustentam a qualidade ambiental.
      </p>
      <p>
        Atualmente, desenvolvo uma iniciação científica na área de resíduos sólidos, com foco no trabalho dos catadores de materiais recicláveis. Minha pesquisa busca evidenciar o papel essencial desses profissionais na cadeia da reciclagem, ao mesmo tempo em que discute a invisibilidade social que ainda enfrentam.
      </p>
      <p>
        Além da pesquisa, participo de projetos de extensão que conectam conhecimento técnico com impacto real. No projeto <strong className="text-foreground font-medium italic">Ecoar</strong>, voltado ao tratamento de água, participei do desenvolvimento de um protótipo didático que simula as etapas do tratamento e é utilizado em atividades de educação ambiental com alunos do ensino fundamental. Também atuo no <strong className="text-foreground font-medium italic">Patas Acadêmicas</strong>, iniciativa voltada ao cuidado e bem-estar de cães.
      </p>
      <p>
        Acredito que a Engenharia Ambiental e Sanitária vai além da técnica. Ela envolve pessoas, educação e transformação social, e é nesse encontro entre ciência e realidade que busco construir minha trajetória.
      </p>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {["Resíduos Sólidos", "Catadores", "Ecoar", "Patas Acadêmicas", "Educação Ambiental"].map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-[10px] font-body tracking-wider uppercase rounded-sm bg-sage-light text-sage border border-sage/20"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CTACard = () => {
  const navigate = useNavigate();

  return (
    <div className="bento-card flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <p className="font-heading text-xl text-foreground text-center sm:text-left">
        Curioso sobre o que faço além da sala de aula?
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-2.5 bg-sage text-primary-foreground font-body text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:bg-primary hover:shadow-md flex-shrink-0"
        >
          Ver Portfólio
        </button>
        <button
          onClick={() => navigate("/certificados")}
          className="px-6 py-2.5 border border-charcoal-light text-foreground font-body text-xs font-medium tracking-widest uppercase rounded-sm transition-all duration-200 hover:border-sage hover:text-sage flex-shrink-0"
        >
          Certificados
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
        <div className="md:col-span-1 flex">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 flex">
          <IntroCard />
        </div>
      </div>
      <CTACard />
    </div>
  );
};

export default HomePage;
