import Link from "next/link";
import BigLogo from "@/components/template/big-logo";

export default function home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-[url('/background-elementos.svg')] bg-cover">
      <div className="flex flex-col items-center gap-4">
        <BigLogo />
        <p className="w-96 select-none text-center font-light leading-6 text-zinc-500">
          Crie e gerencie o convite do seu evento de forma rapida e facil, sem
          complicacoes!
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Crie o seu evento!
      </Link>
    </div>
  );
}
