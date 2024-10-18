import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <main className="
      flex flex-col
      bg-main-bg bg-cover
      w-[100%] h-[80vh]
      px-[15%] pt-16">
        <h1 className="text-5xl font-bold">Transformamos sua ideia<br />numa obra magnífica!</h1>
        <p className="mt-6 text-4xl text-yellow-500">(48) 99223-7865</p>
        <Link href="/" className="
        self-start
        mt-16 p-4
        text-xl
        font-bold
        bg-sky-600 text-yellow-500
        rounded-xl
        hover:scale-105
        active:scale-100
        active:bg-sky-500
        transition-all
        ">Faça um orçamento!</Link>
      </main>
      <section className="h-[100vh]">
        Another section goes here
      </section>
      <section className="h-[100vh]">
        Yet another section coming right at you at super sonic speed
      </section>
      <section className="h-[100vh]">
        Sadly, the last section you are going to see here
      </section>
      <footer></footer>
    </section>
  );
}
