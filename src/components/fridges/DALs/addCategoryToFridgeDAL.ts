import {Fridge, IFridge} from "..";

export default async function(
    {id, categories}: IFridge,
    category: String,
) {
  return await Fridge.findOneAndUpdate(
    {
    _id: id,
    },
    {
      categories: [...categories, category],
    },
    {
      new: false
    }
  );
}