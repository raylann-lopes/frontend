import Logo from "@/components/template/logo";
import Link from "next/link";

export default function home() {
  return (
    <div
      className="
       flex h-screen flex-col justify-center  items-center
       bg-[url('/background-elementos.svg')] bg-cover "
    >
      <div>
        <Logo />
        <p className="text-zinc-500 font-light w-96 leading-6">
          Crie e gerencie o convite do seu evento de forma rapida e facil, sem
          complicacoes!
        </p>
      </div>
      <Link href="/evento">Crie o seu evento!</Link>
    </div>
  );
}
