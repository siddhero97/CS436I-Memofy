import {Fridge} from "..";

export default async function(_ids: String[]) {
  return await Fridge.find({
    '_id': { $in: _ids}
  });
}