import guest from "./guest";

export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  location: string;
  description: string;
  date: Date;
  image: string;
  imageBG: string;
  public: number;
  guest: guest[];
}
