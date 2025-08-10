import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md border-b-2">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="#home" className="pt-4 pb-4">
          <Image
            src="/portfolio/bear.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-12 w-12"
          />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="#home">
              <Button variant="link">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="#blog">
              <Button variant="link">Blog</Button>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <Button variant="link">Projects</Button>
            </Link>
          </li>
          <li>
            <Link href="#cv">
              <Button variant="link">CV</Button>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <Button variant="link">Contact</Button>
            </Link>
          </li>
          <div>
            <ModeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
}
