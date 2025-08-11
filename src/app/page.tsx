import { Footer, Header } from "@/components/app";
import { AboutMe, Blog, CV, Projects } from "@/components/app/main";
export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="border-b-2">
        <div className="flex flex-col gap-[32px] w-full max-w-6xl items-center m-auto">
        <section id="home" className="relative h-fit py-20"><AboutMe/></section>
        <section id="blog" className="relative min-h-screen pt-20"><Blog/></section>
        <section id="projects" className="relative min-h-screen pt-20"><Projects/></section>
        <section id="cv" className="relative min-h-screen pt-20"><CV/></section>
        <section id="contact" className="relative min-h-screen pt-20">Contact</section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
