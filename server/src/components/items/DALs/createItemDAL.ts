import {Item, IItem} from "..";

export default async function(item: IItem) {
  return await Item.create({...item});
}