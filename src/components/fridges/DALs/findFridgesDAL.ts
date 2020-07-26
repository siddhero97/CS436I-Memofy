import {Fridge} from "..";

export default async function(_ids: String[]) {
  // return await Fridge.find({id: _id});
  return await Fridge.find({
    '_id': { $in: _ids}
  });
}