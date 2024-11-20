import guest from "../model/guest";
import guestValidation from "./guest-validation";

export default function complementGuest(guest: Partial<guest>): guest {
  const erros = guestValidation(guest);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const companionNumber = guest.companionNumber ?? 0;

  const haveGuest =
    guest.hasCompanion && guest.confirmed && companionNumber > 0;

  const guestAtt = {
    ...guest,
    companionNumber: haveGuest ? companionNumber : 0,
    hasCompanion: haveGuest,
  };
  return guestAtt as guest;
}
