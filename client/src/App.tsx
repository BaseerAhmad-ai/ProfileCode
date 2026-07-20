import { ThemeProvider } from "./hooks/ThemeToggle";
import { About } from "./pages/About";
import { Contect } from "./pages/Contect";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { Hero } from "./pages/Hero";
import { Process } from "./pages/Process";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Contect />
      <Footer />
    </ThemeProvider>
  );
}
