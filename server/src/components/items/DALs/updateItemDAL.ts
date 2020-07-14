import {Item, IItem} from "..";

export default async function({
  id,
  ...updatedValues
}: IItem) {
  return await Item.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...updatedValues,
    },
    {
      new: true
    }
  );
}