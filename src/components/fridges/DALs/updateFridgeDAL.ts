import {Fridge, IFridge} from "..";

export default async function(
  {id, itemIds}: IFridge,
  itemId: String,
) {
  return await Fridge.findOneAndUpdate(
    {
      _id: id,
    },
    {
      itemIds: [...itemIds, itemId],
    },
    {
      new: true
    }
  );
}