import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: `Zack Snyder's Justice League`,
    src: "../../assets/images/posters/zcjl.jpeg",
    ogPrice: 3500,
    discount: "50%",
    finalPrice: 1750,
    categoryName: "dceu",
    rating: 4.9
  },

  {
    _id: uuid(),
    name: `Birds of Prey`,
    src: "../../assets/images/posters/birdsofprey.jpg",
    ogPrice: 1000,
    discount: "50%",
    finalPrice: 500,
    categoryName: "dceu",
    rating: 4.7
  },

  {
    _id: uuid(),
    name: `Batman V Superman (BVS)`,
    src: "../../assets/images/posters/bvs.jpg",
    ogPrice: 900,
    discount: "50%",
    finalPrice: 450,
    categoryName: "dceu",
    rating: 4.6
  },

  {
    _id: uuid(),
    name: `Catwoman - The Batman`,
    src: "../../assets/images/posters/catwoman.jpg",
    ogPrice: 1500,
    discount: "50%",
    finalPrice: 750,
    categoryName: "dc",
    rating: 4.4
  },

  {
    _id: uuid(),
    name: `Captain America - Civil War`,
    src: "../../assets/images/posters/civilwar.jpg",
    ogPrice: 600,
    discount: "50%",
    finalPrice: 300,
    categoryName: "marvel",
    rating: 4.1
  },

  {
    _id: uuid(),
    name: `Doctor Stange - Multiverse of Madness Solo`,
    src: "../../assets/images/posters/dsmom.jpg",
    ogPrice: 2000,
    discount: "50%",
    finalPrice: 1000,
    categoryName: "marvel",
    rating: 4.0
  },

  {
    _id: uuid(),
    name: `Doctor Stange - Multiverse of Madness`,
    src: "../../assets/images/posters/dsmom2.jpg",
    ogPrice: 2400,
    discount: "50%",
    finalPrice: 1200,
    categoryName: "marvel",
    rating: 3.9
  },

  {
    _id: uuid(),
    name: `Hawkeye`,
    src: "../../assets/images/posters/hawkeye.jpg",
    ogPrice: 1300,
    discount: "50%",
    finalPrice: 650,
    categoryName: "marvel",
    rating: 3.8
  },

  {
    _id: uuid(),
    name: `Joker`,
    src: "../../assets/images/posters/joker.jpg",
    ogPrice: 800,
    discount: "50%",
    finalPrice: 400,
    categoryName: "dc",
    rating: 3.5
  },

  {
    _id: uuid(),
    name: `Kickass`,
    src: "../../assets/images/posters/kickass.jpg",
    ogPrice: 500,
    discount: "50%",
    finalPrice: 250,
    categoryName: "others",
    rating: 3.4
  },

  {
    _id: uuid(),
    name: `Man of Steel`,
    src: "../../assets/images/posters/manofsteel.jpg",
    ogPrice: 1100,
    discount: "50%",
    finalPrice: 550,
    categoryName: "dceu",
    rating: 3.3
  },

  {
    _id: uuid(),
    name: `Moonknight`,
    src: "../../assets/images/posters/moonknight.jpg",
    ogPrice: 3000,
    discount: "50%",
    finalPrice: 1500,
    categoryName: "marvel",
    rating: 3.1
  },

  {
    _id: uuid(),
    name: `Ms Marvel`,
    src: "../../assets/images/posters/msmarvel.jpg",
    ogPrice: 2500,
    discount: "50%",
    finalPrice: 1250,
    categoryName: "marvel",
    rating: 2.9
  },

  {
    _id: uuid(),
    name: `Spider-Man No Way Home`,
    src: "../../assets/images/posters/nowayhome.jpg",
    ogPrice: 4000,
    discount: "50%",
    finalPrice: 2000,
    categoryName: "marvel",
    rating: 2.8
  },

  {
    _id: uuid(),
    name: `Penguin - The Batman`,
    src: "../../assets/images/posters/penguine.jpg",
    ogPrice: 2500,
    discount: "50%",
    finalPrice: 1250,
    categoryName: "dc",
    rating: 2.7
  },

  {
    _id: uuid(),
    name: `Riddler - The Batman`,
    src: "../../assets/images/posters/riddler.jpg",
    ogPrice: 1500,
    discount: "50%",
    finalPrice: 750,
    categoryName: "dc",
    rating: 2.7
  },

  {
    _id: uuid(),
    name: `Batman - The Batman`,
    src: "../../assets/images/posters/thebatman.jpg",
    ogPrice: 2000,
    discount: "50%",
    finalPrice: 1000,
    categoryName: "dc",
    rating: 2.6
  },

  {
    _id: uuid(),
    name: `The Batman Movie`,
    src: "../../assets/images/posters/thebatman-movie.jpg",
    ogPrice: 2500,
    discount: "50%",
    finalPrice: 1250,
    categoryName: "dc",
    rating: 2.5
  },

  {
    _id: uuid(),
    name: `The Incredibles`,
    src: "../../assets/images/posters/theincredibles.jpg",
    ogPrice: 1300,
    discount: "50%",
    finalPrice: 650,
    categoryName: "others",
    rating: 2.3
  },

  {
    _id: uuid(),
    name: `The Suicide Squad`,
    src: "../../assets/images/posters/thesuicidesquad.jpeg",
    ogPrice: 3000,
    discount: "50%",
    finalPrice: 1500,
    categoryName: "dceu",
    rating: 2.1
  },

  {
    _id: uuid(),
    name: `Thor Ragnarok`,
    src: "../../assets/images/posters/thor-ragnarok.png",
    ogPrice: 2500,
    discount: "50%",
    finalPrice: 1250,
    categoryName: "marvel",
    rating: 1.8
  },
];
