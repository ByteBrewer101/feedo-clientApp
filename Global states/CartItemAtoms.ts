import { atom, selector } from "recoil";

interface addonarray{
  id:number;
  quantity:number
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  hotelId: number;
  quantity: number;
  addons?:addonarray[]
}

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

