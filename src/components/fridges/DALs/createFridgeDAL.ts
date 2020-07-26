import {Fridge} from "..";

export default async function(name: String) {
  return await Fridge.create({
    name,
    itemIds: [],
    categories: [],
    filters: [],
  });
}