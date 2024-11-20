import Link from "next/link";
import BigLogo from "@/components/template/big-logo";

export default function home() {
  return (
    <div
      className="
       flex h-screen flex-col justify-center  items-center
       bg-[url('/background-elementos.svg')] bg-cover gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <BigLogo />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
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
