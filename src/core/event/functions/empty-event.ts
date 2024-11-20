import Id from "@/core/shared/Id";
import event from "../model/event";

export default function emptyEvent(): Partial<event> {
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
