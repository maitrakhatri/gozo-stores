import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

/**
  {
    "email": "adarshbalika@gmail.com",
    "password": "adarshBalika123"
  }

  adarshBalika's ecoded token:
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzOTU2MzhkOS04ODlmLTRjOGEtOGM2YS1lOGFkOWM0NTRkYmYiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20iLCJpYXQiOjE2NDc5NTMwMTN9.oeF0cYbTXmZsyt-vn1gZPt2gX-NnKPnWCIbn09a9T2c"

  {
    "firstName": "Maitra",
    "lastName": "Khatri",
    "email": "maitrakhatri@gmail.com",
    "password": "Asdf1234"
  }

{
  "cart": [
    {
    "name": `Thor Ragnarok`,
    "src": "../../assets/images/posters/thor-ragnarok.png",
    "ogPrice": 2500,
    "discount": "50%",
    "finalPrice": 1250,
    "categoryName": "marvel",
    "rating": 1.8
    }
  ]
}
 */
