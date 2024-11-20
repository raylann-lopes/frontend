import Id from "@/core/shared/Id";
import password from "@/core/shared/password";
import Event from "@/core/event/model/event";
import eventValidation from "./Event-validation";

export default function complementEvent(partialEvent: Partial<Event>): Event {
  const errors = eventValidation(partialEvent);

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
