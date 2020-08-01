import {Item, IItem} from "..";

export default async function({
  _id,
  ...updatedValues
}: IItem) {
  return await Item.findOneAndUpdate(
    {
      _id,
    },
    {
      ...updatedValues,
    },
    {
      new: true
    },
  );
}