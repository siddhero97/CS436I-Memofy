import {Item} from "./item/types";
import {Fridge} from "./fridge/types";
import {User} from "./user/types";
import {FeedAlert} from "./feedAlert/types"

export type RootState = {
  item: ItemState;
  user: UserState;
  app: AppState;
  fridge: FridgeState;
  feedAlert: FeedAlertState
};

export interface ItemState {
  isLoading: boolean;
  items: Item[];
  selectedCategories: string[];
}

export interface UserState {
  _id?: string;
  isLoading: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface AppState {
  token?: string;
  isLoggedIn: boolean;
  selectedFridge?: Fridge;
}

export interface FridgeState {
  isLoading: boolean;
  fridges: Fridge[];
  usersSharedWith: User[];
}

export interface FeedAlertState {
  isLoading: boolean;
  feedAlerts: FeedAlert[];
}