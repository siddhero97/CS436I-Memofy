import {Item} from "..";

export default async function(fridgeId: any) {
  return await Item.find({fridgeId: fridgeId});
} 