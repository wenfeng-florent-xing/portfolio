import { Footer, Header } from "@/components/app";
import { AboutMe, Blog, CV, Projects } from "@/components/app/main";
export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="flex flex-col gap-[32px] w-full max-w-6xl items-center m-auto">
        <section id="home" className="relative min-h-screen pt-12"><AboutMe/></section>
        <section id="blog" className="relative min-h-screen pt-12"><Blog/></section>
        <section id="projects" className="relative min-h-screen pt-12"><Projects/></section>
        <section id="cv" className="relative min-h-screen pt-12"><CV/></section>
        <section id="contact" className="relative min-h-screen pt-12">Contact</section>
      </main>
      <Footer />
    </div>
  );
}
