import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tharun Raj D — Full Stack Developer" },
      { name: "description", content: "Portfolio of Tharun Raj D — Java Backend & Full Stack Developer specializing in Spring Boot, REST APIs, and modern web apps." },
      { property: "og:title", content: "Tharun Raj D — Full Stack Developer" },
      { property: "og:description", content: "Backend-focused engineer building scalable systems and AI-integrated apps." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
