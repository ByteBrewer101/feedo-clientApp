import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import Tile from "@/components/UtilityComponents/Tile";
import { favResturants } from "@/Global states/CartItemAtoms";

export default function Favourites() {
  const favoriteRestaurants = useRecoilValue(favResturants);

  const renderItem = ({ item }: { item: { id: number } }) => {
    // Dummy data for each restaurant; replace with your actual data source
    const restaurantData = {
      id: item.id,
      title: `Restaurant ${item.id}`,
      description: "Sample description for the restaurant.",
      imageUrl: "https://picsum.photos/400/300",
      price: 25.99,
      preparationTime: "30-40 min",
      spicyLevel: 2,
      isVegetarian: true,
    };

    return <Tile {...restaurantData} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRestaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  list: {
    padding: 16,
  },
});
