import { type ReactNode, type ElementType } from "react";
import { Briefcase, Heart, Recycle, ExternalLink, BookOpen, Instagram } from "lucide-react";

type Activity = {
  icon: ElementType;
  title: string;
  type: string;
  description: ReactNode;
  tags: string[];
  color: string;
  docUrl?: string;
  docLabel?: string;
  instagramUrl?: string;
  projectUrl?: string;
};

const activities: Activity[] = [
  {
    icon: Heart,
    title: "Patas Acadêmicas — CEFET-MG",
    type: "Extensão Universitária",
    description:
      "Projeto de extensão voltado ao cuidado e bem-estar de cães comunitários no campus do CEFET-MG. As ações envolvem iniciativas de saúde animal, conscientização sobre guarda responsável e fortalecimento da relação entre a comunidade acadêmica e os animais. Atuo no setor de monitoramento, sendo responsável pelo acompanhamento diário dos animais ao longo dos três turnos, incluindo o registro de presença e a avaliação das condições de saúde, higiene e alimentação. Também realizo o preenchimento de relatórios sistemáticos, contribuindo para o acompanhamento contínuo e a tomada de decisões dentro do projeto. Além disso, participo da mediação de conflitos envolvendo os animais, entro em contato com as coordenações responsáveis quando necessário e colaboro na representação do projeto e na apresentação dos resultados das atividades. A atuação no projeto já soma 240 horas, com continuidade prevista para um segundo ano.",
    tags: ["240 horas", "Monitoramento", "Bem-estar Animal", "CEFET-MG"],
    color: "bg-sage-light text-sage border-sage/20",
    docUrl: "https://www.canva.com/design/DAHGNfpxCVQ/vV0BpLCl7wH6l-34sryhKQ/view?utm_content=DAHGNfpxCVQ&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
    docLabel: "Ver Projeto",
    instagramUrl: "https://www.instagram.com/patasacademicas?igsh=YmtocmVmY3pjM24w",
  },
  {
    icon: Recycle,
    title: "Iniciação Científica — CEFET-MG",
    type: "Iniciação Científica",
    description: <>Pesquisa voltada ao estudo dos catadores de materiais recicláveis no contexto da gestão de resíduos sólidos urbanos. O trabalho analisa as condições socioeconômicas desses trabalhadores, os desafios enfrentados no exercício da atividade e o papel fundamental que desempenham na cadeia da reciclagem e na promoção da sustentabilidade urbana. A pesquisa está vinculada aos projetos <em>Mineração Urbana</em> e <em>Casa Verde Sustentável</em>, ambos financiados pela Fundação de Amparo à Pesquisa do Estado de Minas Gerais. Como produto, busca-se desenvolver uma cartilha informativa, com o objetivo de dar visibilidade aos catadores, valorizar seu trabalho e contribuir para a conscientização da sociedade sobre sua importância.</>,
    tags: ["Resíduos Sólidos Urbanos", "Catadores", "FAPEMIG", "Pesquisa"],
    color: "bg-ochre-light text-ochre border-ochre/20",
    docUrl: "https://drive.google.com/file/d/1EF50LAstK_a8m-Sk5YBpE2ffqHyWgPPL/view?usp=drive_link",
  },
  {
    icon: BookOpen,
    title: "Projeto ECOAR — CEFET-MG",
    type: "Extensão Universitária",
    description: "Participação como voluntária no Projeto ECOAR, coordenado pela Prof.ª Lilia Maria de Oliveira, no Departamento de Ciência e Tecnologia Ambiental do CEFET-MG, com orientação da Dra. Elizabeth Halfeld. O projeto integra educação ambiental e cidadania no contexto do tratamento da água, com foco na conscientização de estudantes sobre a importância dos processos de saneamento. As atividades foram desenvolvidas entre março e agosto de 2025, totalizando 60 horas. Como parte do projeto, foi desenvolvido um protótipo didático baseado no Rio das Velhas, representando as etapas do tratamento de água de forma visual e acessível. O material foi utilizado em ações educativas com alunos do 9º ano do Ensino Fundamental do Colégio Logosófico González Pecotche, contribuindo para a compreensão prática dos processos envolvidos e para a formação de uma consciência ambiental mais crítica.",
    tags: ["60 horas", "Voluntária", "CEFET-MG", "2025"],
    color: "bg-sage-light text-sage border-sage/20",
    docUrl: "https://drive.google.com/open?id=1C3T-ie-NSF8ibFdoIztQ3fMX3x--tFaS",
    projectUrl: "https://drive.google.com/file/d/1ci4fSERr_k6q0AgLDL2KudA0qY_bhVDT/view?usp=drive_link",
  },
];

const PortfolioPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 mb-8 text-sage opacity-60">
        <Briefcase size={14} strokeWidth={1.2} />
        <span className="text-[10px] font-body tracking-widest uppercase">Atividades Acadêmicas</span>
      </div>

      <h2 className="font-heading text-3xl font-semibold text-foreground mb-2">Extensão &amp; Pesquisa</h2>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Atividades práticas que desenvolvo além da sala de aula para conectar a ciência à comunidade, sempre com foco na responsabilidade social.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {activities.map((activity, i) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.title}
              className="bento-card flex flex-col gap-4 animate-fade-in"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-paper-dark border border-charcoal-light flex items-center justify-center flex-shrink-0">
                  <Icon size={18} strokeWidth={1.4} className="text-sage" />
                </div>
                <div>
                  <span className={`px-2 py-0.5 text-[9px] font-body tracking-wider uppercase rounded-sm border ${activity.color}`}>
                    {activity.type}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground leading-snug">{activity.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{activity.description}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-charcoal-light">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-[10px] font-body tracking-wider uppercase rounded-sm border ${activity.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2">
                <a
                  href={activity.docUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-body font-medium tracking-widest uppercase rounded-sm border transition-all duration-200 ${activity.docUrl
                    ? "bg-primary text-primary-foreground border-primary hover:opacity-90"
                    : "bg-transparent text-muted-foreground border-charcoal-light cursor-not-allowed opacity-50"
                    }`}
                  onClick={(e) => !activity.docUrl && e.preventDefault()}
                >
                  <ExternalLink size={13} strokeWidth={1.5} />
                  {activity.docLabel || "Ver Certificado"}
                </a>
                {activity.projectUrl && (
                  <a
                    href={activity.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-body font-medium tracking-widest uppercase rounded-sm border border-sage text-sage hover:bg-sage-light transition-all duration-200"
                  >
                    <ExternalLink size={13} strokeWidth={1.5} />
                    Ver Projeto
                  </a>
                )}
                {activity.instagramUrl && (
                  <a
                    href={activity.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-body font-medium tracking-widest uppercase rounded-sm border border-charcoal-light text-muted-foreground hover:border-sage hover:text-sage transition-all duration-200"
                  >
                    <Instagram size={13} strokeWidth={1.5} />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioPage;
