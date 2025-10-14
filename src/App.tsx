import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// QuantaForge pages
import QuantaForgeIndex from "./pages/quantaforge/Index";
import Compiler from "./pages/quantaforge/Compiler";
import Tokenization from "./pages/quantaforge/Tokenization";
import Simulation from "./pages/quantaforge/Simulation";
import Industries from "./pages/quantaforge/Industries";
import Technologies from "./pages/quantaforge/Technologies";
import Contact from "./pages/quantaforge/Contact";
import About from "./pages/quantaforge/About";
import CaseStudies from "./pages/quantaforge/CaseStudies";
import Resources from "./pages/quantaforge/Resources";
import Research from "./pages/quantaforge/Research";

// Feature pages
import MobileWebApps from "./pages/features/MobileWebApps";
import AiMlNlp from "./pages/features/AiMlNlp";
import CloudBigData from "./pages/features/CloudBigData";
import BlockchainDlt from "./pages/features/BlockchainDlt";
import VlsiEdaCad from "./pages/features/VlsiEdaCad";
import IotEmbeddedRobotics from "./pages/features/IotEmbeddedRobotics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuantaForgeIndex />} />
          <Route path="/adyakshar" element={<Index />} />
          
          {/* QuantaForge routes */}
          <Route path="/quantumlabs" element={<QuantaForgeIndex />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/tokenization" element={<Tokenization />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/quantumlabs/compiler" element={<Compiler />} />
          <Route path="/quantumlabs/tokenization" element={<Tokenization />} />
          <Route path="/quantumlabs/simulation" element={<Simulation />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/research" element={<Research />} />
          <Route path="/quantumlabs/industries" element={<Industries />} />
          <Route path="/quantumlabs/technologies" element={<Technologies />} />
          <Route path="/quantumlabs/contact" element={<Contact />} />
          <Route path="/quantumlabs/about" element={<About />} />
          <Route path="/quantumlabs/case-studies" element={<CaseStudies />} />
          <Route path="/quantumlabs/resources" element={<Resources />} />
          <Route path="/quantumlabs/research" element={<Research />} />
          
          {/* Feature routes */}
          <Route path="/features/mobile-web-apps" element={<MobileWebApps />} />
          <Route path="/features/ai-ml-nlp" element={<AiMlNlp />} />
          <Route path="/features/cloud-big-data" element={<CloudBigData />} />
          <Route path="/features/blockchain-dlt" element={<BlockchainDlt />} />
          <Route path="/features/vlsi-eda-cad" element={<VlsiEdaCad />} />
          <Route path="/features/iot-embedded-robotics" element={<IotEmbeddedRobotics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
