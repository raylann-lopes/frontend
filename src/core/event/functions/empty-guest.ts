import Id from "@/core/shared/Id";
import guest from "../model/guest";

export default function emptyGuest(): Partial<guest> {
  return {
    id: Id.novo(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanion: false,
    companionNumber: 0,
  };
}
