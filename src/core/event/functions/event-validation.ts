import Event from "../model/event";

export default function validacao(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.alias) {
    errors.push("Alias do evento é obrigatório");
  }
  if (!event.name) {
    throw new Error("Nome do evento é obrigatório");
  }
  if (!event.date) {
    throw new Error("Data do evento é obrigatória");
  }
  if (!event.description) {
    throw new Error("Descrição do evento é obrigatória");
  }
  if (!event.location) {
    throw new Error("Local do evento é obrigatório");
  }
  if (!event.public || event.public < 1) {
    throw new Error("Publico esperado é obrigatório");
  }
  if (!event.image) {
    throw new Error("Imagem do evento é obrigatória");
  }
  if (!event.imageBG) {
    throw new Error("Imagem de fundo do evento é obrigatória");
  }
  return errors;
}
