import { Product } from "./products";
import { shoppingItem } from "./shopping";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
  shoppingitems: shoppingItem[];

};

export enum productActions {
  "GETPRODUCTS" = "GETPRODUCTS",
  
}
export enum shoppingItemsActions {
  "GETSHOPPINGITEMS" = "GETSHOPPINGITEMS",
  "SAVESHOPPINGITEMS"= "SAVESHOPPINGITEMS"

}

export interface GetProductAction{
  action: productActions.GETPRODUCTS,
  payload: Product[];
}
export interface GetshoppingItemsAction{
  action: shoppingItemsActions.GETSHOPPINGITEMS,
  payload: shoppingItem[];
}
export interface SaveshoppingItemsAction{
  action: shoppingItemsActions.SAVESHOPPINGITEMS,
  payload: shoppingItem;
}




export type Actions = GetProductAction | GetshoppingItemsAction |SaveshoppingItemsAction; 
