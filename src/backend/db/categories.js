import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "marvel",
    name: "Marvel",
    src: "../../assets/images/thumbnail-images/marvel.jpg",
    description:
      "Posters from Marvel Movies",
  },
  {
    _id: uuid(),
    categoryName: "dc",
    name: "DC",
    src: "../../assets/images/thumbnail-images/dc.jpg",
    description:
      "Posters from DC movies",
  },
  {
    _id: uuid(),
    categoryName: "dceu",
    src: "../../assets/images/thumbnail-images/dceu.png",
    name: "DCEU",
    description:
      "Posters from DCEU movies",
  },
  {
    _id: uuid(),
    categoryName: "others",
    src: "../../assets/images/thumbnail-images/others.jpg",
    name: "Others",
    description:
      "Posters from movies other than Marvel/DC",
  },
];
