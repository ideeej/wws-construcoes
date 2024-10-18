'use client';

import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="
            h-auto
            flex items-center justify-center gap-4
            p-2
            bg-sky-700
            transition-all duration-1000">
            <Link href="./" className="hover:scale-105 active:scale-100 transition-all">
                <Image alt="" width={96} height={96} src="/wws-logo.png" className="inline" />
            </Link>
            <Link href="./" className="font-normal text-xl hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
                Home
            </Link>
            <Link href="./quem-somos" className="font-normal text-xl hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
                Quem somos?
            </Link>
            <Link href="./servicos" className="font-normal text-xl hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
                Serviços
            </Link>
            <Link href="./contato" className="font-normal text-xl hover:text-slate-400 hover:scale-105 active:scale-100 transition-all">
                Contato
            </Link>
            <input type="text" placeholder="Pesquise..." className="caret-black placeholder-gray-600 border border-gray-600 rounded-lg p-1 bg-slate-300 text-slate-600 outline-none"/>
        </header>
    )
}