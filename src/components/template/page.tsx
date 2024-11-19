import Logo from "./logo";

export interface pageProps {
  children: React.ReactNode;
  className?: string;
}
export default function Page(props: pageProps) {
  return (
    <div
      className="flex flex-col items-center py-10 min-h-screen
    bg-[url('/background.png')] bg-cover bg-center"
    >
      <Logo />
      <main
        className={`flex-1 flex flex-col justify-center py-10 container props.className`}
      >
        {props.children}
      </main>
    </div>
  );
}
