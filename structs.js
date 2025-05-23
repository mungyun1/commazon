import isEmail from "is-email";
import * as s from "superstruct";

export const CreateUser = s.object({
  email: s.define("Email", isEmail), // define: 새로운 타입 정의
  firstName: s.size(s.string(), 1, 30), // size: string의 길이 제한
  lastName: s.size(s.string(), 1, 30),
  address: s.string(),
});

export const PatchUser = s.partial(CreateUser);

const CATEGORIES = [
  "FASHION",
  "BEAUTY",
  "SPORTS",
  "ELECTRONICS",
  "HOME_INTERIOR",
  "HOUSEHOLD_SUPPLIES",
  "KITCHENWARE",
];

export const CreateProduct = s.object({
  name: s.size(s.string(), 1, 60),
  description: s.string(),
  category: s.enums(CATEGORIES),
  price: s.min(s.number(), 0),
  stock: s.min(s.integer(), 0),
});

export const PatchProduct = s.partial(CreateProduct);
