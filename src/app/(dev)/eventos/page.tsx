import events from "@/core/constants/events";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PageEvents() {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-44">
            <Image
              src={event.image}
              fill
              alt={event.name}
              className="object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col items-center p-7 gap-5">
            <span className="text-lg font-black">{event.name}</span>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {event.description}
            </p>
            <QRCode
              value={JSON.stringify({ id: event.id, password: event.password })}
              className="w-44 h-44"
            ></QRCode>
            <div className="flex gap-5">
              <Link
                href={`/eventos/admin/${event.id}/${event.password}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/invite/${event.alias}`}
                className=" flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
