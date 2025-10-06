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
          <Route path="/" element={<Index />} />
          
          {/* QuantaForge routes */}
          <Route path="/quantaforge" element={<QuantaForgeIndex />} />
          <Route path="/quantaforge/compiler" element={<Compiler />} />
          <Route path="/quantaforge/tokenization" element={<Tokenization />} />
          <Route path="/quantaforge/simulation" element={<Simulation />} />
          <Route path="/quantaforge/industries" element={<Industries />} />
          <Route path="/quantaforge/technologies" element={<Technologies />} />
          <Route path="/quantaforge/contact" element={<Contact />} />
          
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
