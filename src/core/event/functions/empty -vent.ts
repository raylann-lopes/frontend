import Id from "@/core/shared/Id";
import event from "../model/event";

export default function emptyVent(): Partial<event> {
  return {
    id: Id.novo(),
    name: "",
    location: "",
    description: "",
    date: new Date(),
    image: "",
    imageBG: "",
    public: 1,
  };
}
