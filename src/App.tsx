import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Electromenager from "./pages/Electromenager.tsx";
import Mobilier from "./pages/Mobilier.tsx";
import Telephones from "./pages/Telephones.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsappFloating from "./components/site/WhatsappFloating.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/electromenager" element={<Electromenager />} />
          <Route path="/mobilier" element={<Mobilier />} />
          <Route path="/telephones" element={<Telephones />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsappFloating />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
