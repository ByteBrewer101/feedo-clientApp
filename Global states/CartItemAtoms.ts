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

interface AddonItem{
  id:number;
  name:string;
  price:number;
  quantity:number
}

export const addonCart = atom<AddonItem[]>({
  key:"addonCart",
  default:[]
})

interface FavResturants{
  id:number
}

export const favResturants=atom<FavResturants[]>({
  key:"favResturants",
  default:[]
})