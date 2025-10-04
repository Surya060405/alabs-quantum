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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
