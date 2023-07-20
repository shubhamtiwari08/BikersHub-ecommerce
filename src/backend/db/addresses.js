import { v4 as uuid } from "uuid";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have address list and address by default
 * */

export const userAddress = [
  {
    _id: uuid(),
    name: "Adarsh Balika",
    house: "sector 15",
    city: "Sonipat",
    state: "Haryana",
    country: "India",
    pincode: 101001,
    mobile: 1234567890
  },
];