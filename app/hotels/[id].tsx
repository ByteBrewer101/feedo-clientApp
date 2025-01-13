import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { hotels, food } from "@/testData/testDb";
import { FoodItem } from "@/components/UtilityComponents/FoodItemComponent";
import { HotelBanner } from "@/components/UtilityComponents/HotelBannerComponent";
import { useRecoilValue } from "recoil";
import { cartState } from "@/Global states/CartItemAtoms";

const HotelDetail = () => {
  const { id } = useLocalSearchParams(); // Get the dynamic parameter from the URL
  const hotelId = parseInt(id as string, 10);
  const router = useRouter()

  // Find the hotel and its associated foods
  const hotel = hotels.find((hotel) => hotel.id === hotelId);
  const hotelFoods = food.filter((foodi) => foodi.hotelId === hotelId);

  // Access the cartItems atom
  const cartItems = useRecoilValue(cartState);

  if (!hotel) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Hotel not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HotelBanner hotel={hotel} />
      <FoodList foods={hotelFoods} />
      {/* Conditionally render the View Cart button if cartItems is not empty */}
      {cartItems.length > 0 && (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            /* Add navigation logic to go to /tabs/cart */
            router.push("/(tabs)/cart");

          }}
        >
          <Text style={styles.cartButtonText}>View Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// FoodList Component
const FoodList = ({ foods }: { foods: any[] }) => (
  <FlatList
    data={foods}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <FoodItem food={item} />}
    contentContainerStyle={foodListStyles.container}
  />
);

const foodListStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 100, // Add extra space below the food list
  },
});
// Main Styles for HotelDetail
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    elevation: 4, // For Android shadow
    shadowColor: "black", // For iOS shadow
    shadowOffset: { width: 0, height: 3 }, // Offset for iOS
    shadowOpacity: 0.75, // Opacity for iOS
    shadowRadius: 5, // Blur radius for iOS
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  cartButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#ff6b00",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5, // For Android shadow
  },
  cartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HotelDetail;
