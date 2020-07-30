import {Fridge, IFridge} from "..";

export default async function({
  id,
  ...updatedValues
}: IFridge) {
  return await Fridge.findOneAndUpdate(
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