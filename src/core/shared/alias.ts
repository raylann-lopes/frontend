export default class alias {
  static formatar(valor: string): string {
    return valor.replace(/ /g, "-").toLowerCase();
  }
}
