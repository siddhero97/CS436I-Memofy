import {Fridge, IFridge} from "..";

export default async function(fridge: IFridge) {
  return await Fridge.create({...fridge});
}