import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <header>
        <Link href="./">
        <Image alt="" width="64" height="64" src="/public/wws-logo.webp" />
        </Link>
      </header>
      <main></main>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </section>
  );
}
