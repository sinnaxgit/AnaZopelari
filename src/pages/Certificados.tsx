import { Award, ExternalLink, Leaf, Globe, Star } from "lucide-react";

type Certificate = {
  title: string;
  date: string;
  hours: string;
  url: string;
};

type Category = {
  label: string;
  icon: React.ElementType;
  tagClass: string;
  borderClass: string;
  iconClass: string;
  certs: Certificate[];
};

const categories: Category[] = [
  {
    label: "Meio Ambiente & Sustentabilidade",
    icon: Leaf,
    tagClass: "bg-sage-light text-sage border-sage/20",
    borderClass: "border-sage/30",
    iconClass: "text-sage",
    certs: [
      { title: "Gerenciamento de Resíduos", date: "Set 2025", hours: "60h", url: "https://drive.google.com/open?id=1w47yo8Zwv0TfBNL5HAEprpCvkQGnObFs" },
      { title: "Conservação Ambiental", date: "Set 2025", hours: "60h", url: "https://drive.google.com/open?id=1NcpVRveH7V-1QBuBQdbvPaUMkd7S66O6" },
      { title: "Recomposição de Áreas Degradadas para o Bioma Cerrado", date: "Out 2025", hours: "48h", url: "https://drive.google.com/open?id=1vKOz5sgx6rYpkLyKpUHFWMC7m6CGGUFN" },
      { title: "Avaliação de qualidade do solo para agricultores familiares", date: "Out 2025", hours: "40h", url: "https://drive.google.com/open?id=1HQ0tKjvFXyxTiNY-N-uplFRdpcMfvIrS" },
      { title: "Gestão Ambiental e Sustentabilidade", date: "Out 2025", hours: "30h", url: "https://drive.google.com/open?id=1kNEt2avPD2RhEbdV0KldL6SWYH1h5jpz" },
      { title: "Formação de Educadores em Sistemas Agroflorestais Sintrópicos", date: "Out 2025", hours: "30h", url: "https://drive.google.com/open?id=1xM22pWnfLGzmi5u9avUBL1UgMCuis_Oa" },
      { title: "Por que Não Incinerar? Tecnologias, Legislações e Caminhos Sustentáveis", date: "Jun–Jul 2025", hours: "25h", url: "https://drive.google.com/open?id=1c-4XcaDZ4Te-V1cuX7LZlLb6HrnV56uh" },
      { title: "A problemática da Importação e Exportação de Resíduos Sólidos no Brasil", date: "Set 2025", hours: "10h", url: "https://drive.google.com/open?id=1CeKHT98rEc6og9Zf9NgLDTlrOtL4tA5X" },
      { title: "SEMINÁRIO: Valoração dos Serviços Ecossistêmicos", date: "Nov 2025", hours: "4h", url: "https://drive.google.com/open?id=1ey3LaCgUPb6-xaGJbf0PjGuBXFVHgZVH" },
      { title: "Simpósio Ambiental para Ação Climática", date: "Jun 2024", hours: "6h", url: "https://drive.google.com/open?id=1EqNPkqv2VYesRr023NG6yFOEWT6W98ck" },
      { title: "DIA MUNDIAL DO MEIO AMBIENTE: A Geografia e a Análise de Riscos", date: "Jun 2024", hours: "3h", url: "https://drive.google.com/open?id=1pYRmCOHGBzUAhGdDXCVB_9g6kQtNeXBI" },
      { title: "Visita Técnica: Central de Tratamento de Resíduos Macaúbas", date: "Ago 2024", hours: "3h30m", url: "https://drive.google.com/open?id=1peLUN0TRKKkA-PAgTe7uU8pBFwchn2kY" },
      { title: "A construção coletiva da coleta seletiva em São Paulo", date: "Out 2025", hours: "1h30m", url: "https://drive.google.com/open?id=1hu0bX-6hOK7SQ_3R7UO7_3HW0mHhayYz" },
      { title: "Interdisciplinaridade em Avaliação Ambiental Estratégica", date: "Out 2021", hours: "1h", url: "https://drive.google.com/open?id=15HYT3ecjOZu2ajLK64FL0LVSIOGbXmLM" },
    ],
  },
  {
    label: "Eventos & Congressos",
    icon: Star,
    tagClass: "bg-ochre-light text-ochre border-ochre/20",
    borderClass: "border-ochre/30",
    iconClass: "text-ochre",
    certs: [
      { title: "III Congresso Nacional de Inovação e Popularização da Ciência", date: "Out 2024", hours: "30h", url: "https://drive.google.com/open?id=1ppS9MqbgEqcCJY2JVICYYqys0zsLq4l0" },
      { title: "III Seminário Nacional: Serviço Social e Pesquisa Social na Amazônia", date: "Nov 2024", hours: "24h", url: "https://drive.google.com/open?id=1Uaok8ouCNjIeZUqNSFnAP3ezKmYYyP8B" },
      { title: "III Simpósio Internacional de Tecnologia (TechMove 2024)", date: "Jun 2024", hours: "16h", url: "https://drive.google.com/open?id=1iid7cRtz6GbK6LQ4GXLdbmzb8NmTNed4" },
      { title: "Processo Seletivo Ensino Técnico 2025 — Fiscalização", date: "Nov 2024", hours: "7h", url: "https://drive.google.com/open?id=1BHCPGOPM1r78YlSvDOkP4GW8fxwJKDDc" },
      { title: "Avaliação dos Cursos de Graduação do CEFET-MG (2024/2)", date: "Mai 2025", hours: "2h", url: "https://drive.google.com/open?id=1C8y4uCCuvc9e57uVYuBaKQlaN31d6WRF" },
      { title: "Simpósio Acadêmico Biomedicina UFMG", date: "Jun 2024", hours: "—", url: "https://drive.google.com/open?id=19niKN3LnF5mtm82poCJak2-eucYkQeVT" },
      { title: "Certificado AEB", date: "Out 2025", hours: "—", url: "https://drive.google.com/open?id=1nPbB-WkNvApDfvwLQaK7FlRekLCkwod2" },
    ],
  },
  {
    label: "Desenvolvimento & Idiomas",
    icon: Globe,
    tagClass: "bg-paper-dark text-muted-foreground border-charcoal-light",
    borderClass: "border-charcoal-light",
    iconClass: "text-muted-foreground",
    certs: [
      { title: "Audiovisual na Escola", date: "Set 2025", hours: "60h", url: "https://drive.google.com/open?id=1XqKOIRPli1iMoTIXoXFNxuFB5u65jNNU" },
      { title: "Interculturalidade", date: "Set 2025", hours: "50h", url: "https://drive.google.com/open?id=1o99-sDx1kYq3OIyNT50aDX1h6iGUnd5G" },
      { title: "Marketing e Vendas: tudo o que você precisa saber", date: "Out 2025", hours: "50h", url: "https://drive.google.com/open?id=1OPbpVDp-TmUFN8luqixwnS2T1v6HObcY" },
      { title: "Espanhol Básico para Atendimento a Clientes - II", date: "Out 2025", hours: "40h", url: "https://drive.google.com/open?id=1opVQSgBfVU004_xU56F1dyyptiyjMu3U" },
      { title: "JOVEM EMPREENDEDOR NO CAMPO", date: "Out 2025", hours: "32h", url: "https://drive.google.com/open?id=1qDmE42_7jc8FQiKPXPWIqewUdr3OpAKY" },
      { title: "Inglês 8", date: "Set 2025", hours: "30h", url: "https://drive.google.com/open?id=1PdJm9LsoDYsT1Pz-RKqxjH2fW8MA6ix2" },
      { title: "ESG: Por que é importante para seu negócio?", date: "Out 2025", hours: "2h", url: "https://drive.google.com/open?id=1s1dhMcKV8u8Ew-kL-0Ax5S7Eiw_jaC6y" },
      { title: "IMERSÃO IA 4ª EDIÇÃO (Alura/Google)", date: "Out 2025", hours: "2h", url: "https://drive.google.com/open?id=1EoU0vV1mXdm7e4JOC8gWKxF0OCUzjJHA" },
      { title: "Tendência do ESG (Palestra)", date: "Jun 2024", hours: "1h", url: "https://drive.google.com/open?id=1TwZSb-Uz8bmXzHrNiJKXAeWT6IkK9Pgb" },
      { title: "Começando em Programação: carreira e primeiros passos", date: "Out 2025", hours: "1h", url: "https://drive.google.com/open?id=1IG02KpptWu1H7Icq8fsfXaa-2YTc5e1A" },
    ],
  },
];

const totalHours = 749;

const CertificadosPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 text-sage opacity-60">
        <Award size={14} strokeWidth={1.2} />
        <span className="text-[10px] font-body tracking-widest uppercase">Certificados & Cursos</span>
      </div>
      <h2 className="font-heading text-3xl font-semibold text-foreground mb-1">Minha Formação Complementar</h2>
      <p className="font-body text-sm text-muted-foreground mb-2">
        Cursos, eventos e atividades extracurriculares que complementam minha trajetória acadêmica.
      </p>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-6 mb-10 pt-4 border-t border-charcoal-light">
        <div className="text-center">
          <p className="font-body text-2xl font-semibold text-foreground">{categories.reduce((sum, c) => sum + c.certs.length, 0)}</p>
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Certificados</p>
        </div>
        <div className="text-center">
          <p className="font-body text-2xl font-semibold text-foreground">{totalHours}h</p>
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">Carga Total</p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.label}>
              {/* Category header */}
              <div className={`flex items-center gap-3 mb-5 pb-3 border-b ${category.borderClass}`}>
                <div className={`w-7 h-7 rounded-sm border ${category.borderClass} flex items-center justify-center`}>
                  <Icon size={14} strokeWidth={1.4} className={category.iconClass} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{category.label}</h3>
                <span className={`ml-auto px-2 py-0.5 text-[9px] font-body tracking-wider uppercase rounded-sm border ${category.tagClass}`}>
                  {category.certs.length} itens
                </span>
              </div>

              {/* Certs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.certs.map((cert, i) => (
                  <div
                    key={cert.title}
                    className="bento-card flex flex-col gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.05 * (i + 1)}s` }}
                  >
                    {/* Date & hours */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 text-[9px] font-body tracking-wider uppercase rounded-sm border ${category.tagClass}`}>
                        {cert.date}
                      </span>
                      <span className="text-[10px] font-body text-muted-foreground">{cert.hours}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-sm font-semibold text-foreground leading-snug flex-1">
                      {cert.title}
                    </h4>

                    {/* Link button */}
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center justify-center gap-1.5 w-full px-3 py-2 text-[10px] font-body font-medium tracking-widest uppercase rounded-sm border border-charcoal-light text-muted-foreground transition-all duration-200 hover:border-sage hover:text-sage hover:bg-sage-light"
                    >
                      <ExternalLink size={11} strokeWidth={1.5} />
                      Ver Certificado
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificadosPage;
