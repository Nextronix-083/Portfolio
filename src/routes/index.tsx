import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, QuickProfile } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Research } from "@/components/portfolio/Research";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications, Education, Volunteering } from "@/components/portfolio/Credentials";
import { Focus } from "@/components/portfolio/Focus";
import { Contact } from "@/components/portfolio/Contact";

const title = "Nazmul Hosen — Information & Communication Engineer";
const description =
  "Portfolio of Nazmul Hosen: university Teaching Assistant, MikroTik-certified network operations, and applied machine learning in Python.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickProfile />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Certifications />
      <Education />
      <Volunteering />
      <Focus />
      <Contact />
    </main>
  );
}
