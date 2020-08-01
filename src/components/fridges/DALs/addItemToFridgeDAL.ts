import {Fridge, IFridge} from "..";

export default async function(
  {id, itemIds, categories}: IFridge,
  itemId: String,
  itemCategory: String,
) {
  const newCategories = categories.includes(itemCategory)
    ? categories
    : [...categories, itemCategory];

  return await Fridge.findOneAndUpdate(
    {
      _id: id,
    },
    {
      categories: newCategories,
      itemIds: [...itemIds, itemId],
    },
    {
      new: true
    }
  );
}