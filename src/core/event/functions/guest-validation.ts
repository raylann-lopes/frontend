import guest from "../model/guest";

export default function guestValidation(guest: Partial<guest>): string[] {
  const errors: string[] = [];

  if (!guest.name) {
    errors.push("Nome é obrigatório.");
  }
  if (!guest.email) {
    errors.push("Email é obrigatório.");
  }

  return errors;
}
