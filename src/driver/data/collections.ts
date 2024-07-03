import { CollectionItem } from "../../driver/types.ts";

const COLLECTIONS: Record<string, CollectionItem[]> = {
  DrawerItems: [
    {
      id: "d034fa95-e3cf-4319-aa04-0beddc1c4b80",
      size: "small",
      title: "Trintukas",
      description: "Trintukas skirtas trinti",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "614e9c6c-6ab3-4f08-ab52-2db74df889c0",
      size: "big",
      title: "Sąsiuvinis",
      description: "Sąsiuvinis skirtas rašyti",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "05c24a4e-f201-47f4-92c4-86d01a34bffc",
      size: "medium",
      title: "Žirklės",
      description: "Žirklės skirtos kirpti",
      image: "https://picsum.photos/200/300",
    },
  ],
};

export default COLLECTIONS;
