import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRecoilState } from "recoil";

import { addonCart, cartState } from "@/Global states/CartItemAtoms";
import { FoodItem } from "@/components/UtilityComponents/FoodItemComponent";
import AddonTile from "@/components/UtilityComponents/AddonTile";
import { CartSummary } from "@/components/CartSummary";



export default function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const [addons,setAddons]=useRecoilState(addonCart)


  //set Cart using data from hook 





  const totalAmount = [...cart,...addons].reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // Implement order placement logic here
    alert("Order placed successfully!");
  };

  //@ts-expect-error
  const renderItem = ({ item,key }: { item: CartItem }) => (
    <FoodItem
      food={item}
      key={item.id}
      //@ts-expect-error
      cartItem={cart.find((cartItem) => cartItem.id === item.id)}
    />
  );

interface AddonItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}


   const renderItemAddons = ({ item }: { item: AddonItem }) => (
     <AddonTile key={item.id} id={item.id} />
   );
  

  if (cart.length === 0 && addons.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Your Cart ({cart.length + addons.length} items)</Text>

        {/* Render the cart items */}
        {cart.map((item) => renderItem({ item }))}

        {addons.length>0 && <Text style={styles.headerText} >Extras</Text>}
        
        {addons.map((item)=>renderItemAddons({item}))}

        <View style={styles.bottomContainer}>
          <CartSummary totalAmount={totalAmount} />
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <TouchableOpacity style={styles.orderButton} onPress={handlePlaceOrder}>
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "flex-end", // Ensure the button stays at the bottom
  },
  scrollContainer: {
    padding: 10,
    flexGrow: 1, // Ensure the scrollview content expands to fill available space
    paddingBottom: 80, // Add padding at the bottom to leave space for the button
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
  },
  bottomContainer: {
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius:20
  },
  summaryContainer: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    color: "#333",
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  orderButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#ff6b00",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
