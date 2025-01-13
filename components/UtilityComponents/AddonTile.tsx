import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { addons } from "@/testData/testDb";

interface PropTypes {
  id: number;
}

export default function AddonTile({ id }: PropTypes) {
  const [count, setCount] = useState(0);
  const currentAddon = addons.find((addon) => addon.id === id);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://shorturl.at/oW6nu" }}
          style={styles.image}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.details}>
          <Text style={styles.name}>{currentAddon?.name}</Text>
          <Text style={styles.price}>${currentAddon?.price.toFixed(2)}</Text>
          <Text style={styles.id}>#{currentAddon?.id}</Text>
        </View>

        {count === 0 ? (
          <TouchableOpacity style={styles.addButton} onPress={handleIncrement}>
            <Text style={styles.addButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={handleDecrement}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.countText}>{count}</Text>

            <TouchableOpacity
              style={styles.counterButton}
              onPress={handleIncrement}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ff6b00",
    marginBottom: 2,
  },
  id: {
    fontSize: 12,
    color: "#999",
  },
  addButton: {
    backgroundColor: "#ff6b00",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 4,
  },
  counterButton: {
    backgroundColor: "#F8F9FA",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  counterButtonText: {
    fontSize: 18,
    color: "#ff6b00",
    fontWeight: "600",
  },
  countText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
});