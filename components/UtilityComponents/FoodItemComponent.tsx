//@ts-nocheck
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { cartState } from "@/Global states/CartItemAtoms";
import { useRouter } from "expo-router";

// Function to handle the Add To Cart action
function handleAddToCart(food, setCart) {
  setCart((prevCart) => [...prevCart, { ...food, quantity: 1 }]);
}

function handleQuantityChange(foodId, setCart, increment) {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === foodId
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}

export function FoodItem({ food }) {
  const [cart, setCart] = useRecoilState(cartState);
  const cartItem = cart.find((item) => item.id === food.id);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageSection />
      <ContentSection
        food={food}
        cartItem={cartItem}
        setCart={setCart}
        router={router}
      />
    </View>
  );
}

function ImageSection() {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: "https://shorturl.at/oW6nu" }}
        style={styles.image}
      />
    </View>
  );
}

function ContentSection({ food, cartItem, setCart, router }) {
  return (
    <View style={styles.contentContainer}>
      <DetailsSection food={food} />
      <ActionSection
        food={food}
        cartItem={cartItem}
        setCart={setCart}
        router={router}
      />
    </View>
  );
}

function DetailsSection({ food }) {
  return (
    <View style={styles.details}>
      <Text style={styles.name}>{food.name}</Text>
      <Text style={styles.price}>${food.price.toFixed(2)}</Text>
      <Text style={styles.id}>#{food.id}</Text>
    </View>
  );
}

function ActionSection({ food, cartItem, setCart, router }) {
  return (
    <View style={styles.actionContainer}>
      {cartItem ? (
        <>
          <TouchableOpacity
            style={styles.addonsButton}
            onPress={() => router.push(`/addons/${food.id}`)}
          >
            <Text style={styles.addonsButtonText}>Addons</Text>
          </TouchableOpacity>

          <QuantityControls
            foodId={food.id}
            cartItem={cartItem}
            setCart={setCart}
          />
        </>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(food, setCart)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function QuantityControls({ foodId, cartItem, setCart }) {
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => handleQuantityChange(foodId, setCart, false)}
      >
        <Text style={styles.quantityButtonText}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantityText}>{cartItem.quantity}</Text>

      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => handleQuantityChange(foodId, setCart, true)}
      >
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "space-between",
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff6b00", // Updated orange color for price
    marginBottom: 2,
  },
  id: {
    fontSize: 12,
    color: "#999",
  },
  actionContainer: {
    marginTop: 8,
    flexDirection: "row", // Align buttons horizontally
    justifyContent: "space-between",
    alignItems: "center", // Align vertically centered
  },
  addonsButton: {
    backgroundColor: "green", // Green color for Addons button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addonsButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#ff6b00", // Updated orange color for add button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  quantityButton: {
    backgroundColor: "#F8F9FA",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#ff6b00", // Updated orange color for quantity buttons
    fontWeight: "600",
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
});
