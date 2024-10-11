import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <header className="
      flex items-center justify-center gap-4
      p-2
      bg-slate-300
      ">
        <Link href="./" className="hover:scale-105 active:scale-100 transition-all">
          <Image alt="" width="64" height="64" src="/wws-logo.png" className="inline" />
        </Link>
        <Link href="./" className="font-normal hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
          Home
        </Link>
        <Link href="./quem-somos" className="font-normal hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
          Quem somos?
        </Link>
        <Link href="./blog" className="font-normal hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
          Blog
        </Link>
        <input type="text" placeholder="Pesquise..." className="caret-black placeholder-gray-600 border border-gray-600 rounded-lg p-1 bg-slate-300 text-slate-600 outline-none"/>
      </header>
      <main></main>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </section>
  );
}
