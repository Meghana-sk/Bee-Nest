import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "Guest@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Meghana",
    lastName: "SK",
    username: "meghanask",
    password: "Msk@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
