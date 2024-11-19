export default class password {
  static create(size: number = 15): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const number = "0123456789";
    const special = "!@#$%&*";

    const group = [minusculas, maiusculas, number, special];
    const password = [];

    for (let i = 0; i < size; i++) {
      const passwordGroup = group[Math.floor(Math.random() * group.length)];
      password.push(
        passwordGroup[Math.floor(Math.random() * passwordGroup.length)]
      );
    }
    return password.join("");
  }
}
