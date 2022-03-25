import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "marvel",
    description:
      "Posters from Marvel Movies",
  },
  {
    _id: uuid(),
    categoryName: "dc",
    description:
      "Posters from DC movies",
  },
  {
    _id: uuid(),
    categoryName: "dceu",
    description:
      "Posters from DCEU movies",
  },
  {
    _id: uuid(),
    categoryName: "others",
    description:
      "Posters from movies other than Marvel/DC",
  },
];
