import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Certificados from "./pages/Certificados.tsx";
import Curriculo from "./pages/Curriculo.tsx";
import NotFound from "./pages/NotFound.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import FloralBackground from "./components/FloralBackground.tsx";

const queryClient = new QueryClient();

const PortfolioPage = () => (
  <div className="min-h-screen paper-texture relative z-10">
    <NavigationBar />
    <Portfolio />
  </div>
);

const CertificadosPage = () => (
  <div className="min-h-screen paper-texture relative z-10">
    <NavigationBar />
    <Certificados />
  </div>
);

const CurriculoPage = () => (
  <div className="min-h-screen paper-texture relative z-10">
    <NavigationBar />
    <Curriculo />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <FloralBackground />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/certificados" element={<CertificadosPage />} />
          <Route path="/curriculo" element={<CurriculoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
