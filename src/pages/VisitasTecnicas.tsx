import { MapPin, Footprints, Calendar, Building2, ChevronRight, X } from "lucide-react";
import { useState } from "react";

type Visit = {
  id: number;
  title: string;
  location: string;
  city: string;
  date: string;
  category: string;
  categoryColor: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  docUrl?: string;
};

const visits: Visit[] = [
  {
    id: 1,
    title: "Central de Tratamento de Resíduos — Macaúbas",
    location: "CTR Macaúbas",
    city: "Macaúbas, MG",
    date: "Agosto, 2024",
    category: "Resíduos Sólidos",
    categoryColor: "bg-sage-light text-sage border-sage/20",
    description:
      "Visita técnica ao aterro sanitário e à Central de Tratamento de Resíduos de Macaúbas, com foco nos processos operacionais de disposição final de resíduos sólidos urbanos. A atividade proporcionou uma visão prática sobre a gestão integrada de resíduos, incluindo coleta, triagem, compostagem e disposição final em conformidade com a Política Nacional de Resíduos Sólidos (PNRS).",
    highlights: [
      "Técnicas de disposição e compactação de resíduos",
      "Sistemas de drenagem de chorume e biogás",
      "Monitoramento ambiental do entorno",
      "Políticas locais de gestão de RSU",
    ],
    image: "/Visitas01.jpeg",
    imageAlt: "Central de Tratamento de Resíduos de Macaúbas",
    docUrl: "https://drive.google.com/file/d/1peLUN0TRKKkA-PAgTe7uU8pBFwchn2kY/view?usp=sharing",
  },
  {
    id: 2,
    title: "Caracterização da Região de Belo Horizonte",
    location: "Múltiplos Pontos",
    city: "Belo Horizonte, MG",
    date: "Janeiro, 2024",
    category: "Geociências",
    categoryColor: "bg-ochre-light text-ochre border-ochre/20",
    description:
      "Análise integrada de campo correlacionando observações com a caracterização fisiográfica de Belo Horizonte. Avaliação de formações geológicas (Grupos Itabira e Piracicaba, Cráton São Francisco), processos superficiais e impactos ambientais, com proposição de soluções mitigadoras para áreas de risco geotécnico e escorregamentos.",
    highlights: [
      "Serra do Curral e Mirante do Rola Moça",
      "Análise de instabilidade em encostas e filitos",
      "Permeabilidade de neossolos e cambissolos",
      "Impactos da expansão urbana e mineração",
    ],
    image: "/Visita02.png",
    imageAlt: "Caracterização da Região de Belo Horizonte",
    docUrl: "https://drive.google.com/file/d/1L2xQNfDYlbe9UvAWyxoPYRtuGlwGqtg5/view?usp=drive_link",
  },
];

const VisitCard = ({ visit, onOpen }: { visit: Visit; onOpen: () => void }) => (
  <div
    className="bento-card flex flex-col gap-0 overflow-hidden cursor-pointer group animate-fade-in p-0"
    onClick={onOpen}
  >
    {/* Image */}
    <div className="relative w-full h-52 overflow-hidden bg-paper-dark flex-shrink-0">
      {visit.image ? (
        <img
          src={visit.image}
          alt={visit.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Building2 size={40} strokeWidth={1} className="text-charcoal-light" />
        </div>
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent" />
      {/* Category badge over image */}
      <span
        className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-body tracking-wider uppercase rounded-sm border ${visit.categoryColor}`}
      >
        {visit.category}
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col gap-3 p-5 flex-1">
      <h3 className="font-heading text-base font-semibold text-foreground leading-snug group-hover:text-sage transition-colors duration-200">
        {visit.title}
      </h3>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={11} strokeWidth={1.5} />
          <span className="font-body text-[11px]">{visit.city}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar size={11} strokeWidth={1.5} />
          <span className="font-body text-[11px]">{visit.date}</span>
        </div>
      </div>

      <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {visit.description}
      </p>

      <div className="mt-auto flex items-center gap-1 text-sage text-[10px] font-body tracking-widest uppercase pt-3 border-t border-charcoal-light">
        <span>Ver detalhes</span>
        <ChevronRight size={11} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </div>
  </div>
);

const Modal = ({ visit, onClose }: { visit: Visit; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="relative bg-paper rounded-sm border border-charcoal-light w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-sm border border-charcoal-light text-muted-foreground hover:text-foreground hover:border-sage transition-all duration-200"
      >
        <X size={14} strokeWidth={1.5} />
      </button>

      {/* Hero image */}
      {visit.image && (
        <div className="w-full h-72 overflow-hidden">
          <img
            src={visit.image}
            alt={visit.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Body */}
      <div className="p-6 flex flex-col gap-5">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`px-2 py-0.5 text-[9px] font-body tracking-wider uppercase rounded-sm border ${visit.categoryColor}`}
          >
            {visit.category}
          </span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin size={11} strokeWidth={1.5} />
            <span className="font-body text-[11px]">{visit.city}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar size={11} strokeWidth={1.5} />
            <span className="font-body text-[11px]">{visit.date}</span>
          </div>
        </div>

        <h2 className="font-heading text-2xl font-semibold text-foreground leading-snug">
          {visit.title}
        </h2>

        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {visit.description}
        </p>

        {/* Highlights */}
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-3">
            Temas abordados
          </p>
          <ul className="flex flex-col gap-2">
            {visit.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link para o documento */}
        {visit.docUrl && (
          <div className="pt-4 border-t border-charcoal-light">
            <a
              href={visit.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-body font-medium tracking-widest uppercase rounded-sm border border-sage text-sage hover:bg-sage-light transition-all duration-200"
            >
              Ver Documento Completo
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

const VisitasTecnicasPage = () => {
  const [selected, setSelected] = useState<Visit | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8 text-sage opacity-60">
        <Footprints size={14} strokeWidth={1.2} />
        <span className="text-[10px] font-body tracking-widest uppercase">
          Campo &amp; Prática
        </span>
      </div>

      <h2 className="font-heading text-3xl font-semibold text-foreground mb-2">
        Visitas Técnicas
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Registros de visitas a instalações e equipamentos ambientais para
        observação in loco dos processos estudados em sala de aula.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 mb-10 pt-4 border-t border-charcoal-light">
        <div className="text-center">
          <p className="font-body text-2xl font-semibold text-foreground">
            {visits.length}
          </p>
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
            {visits.length === 1 ? "Visita realizada" : "Visitas realizadas"}
          </p>
        </div>
        <div className="text-center">
          <p className="font-body text-2xl font-semibold text-foreground">
            {[...new Set(visits.map((v) => v.category))].length}
          </p>
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
            {[...new Set(visits.map((v) => v.category))].length === 1
              ? "Área temática"
              : "Áreas temáticas"}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {visits.map((visit) => (
          <VisitCard
            key={visit.id}
            visit={visit}
            onOpen={() => setSelected(visit)}
          />
        ))}

        {/* Placeholder card — "em breve" */}
        <div className="bento-card flex flex-col items-center justify-center gap-3 min-h-[300px] border-dashed opacity-40">
          <Building2 size={28} strokeWidth={1} className="text-muted-foreground" />
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase text-center">
            Próximas visitas
            <br />
            em breve
          </p>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal visit={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default VisitasTecnicasPage;
