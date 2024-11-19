import Id from "@/core/shared/Id";
import validacao from "./Event-validation";
import password from "@/core/shared/password";
import Event from "@/core/event/model/event";

export default function complementarEvento(
  partialEvent: Partial<Event>
): Event {
  const errors = validacao(partialEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const Event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.novo(),
    password: partialEvent.password ?? password.create(),
    public: +(partialEvent.public ?? 1),
  } as Event;

  return Event;
}
