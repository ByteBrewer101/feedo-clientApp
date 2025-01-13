import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

interface TileProps {
  title: string;
  description: string;
  imageUrl: string;
  id: number | string;
  price?: number; // Made price optional
  preparationTime?: string;
  spicyLevel?: number;
  isVegetarian?: boolean;
}

const Tile = ({
  title = "Delicious Dish",
  description = "A tasty meal prepared with fresh ingredients",
  imageUrl,
  id,
  price = 0, // Default value added
  preparationTime = "20-25 min",
  spicyLevel = 0,
  isVegetarian = false,
}: TileProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePress = () => {
    router.push(`/hotels/${id}`);
  };

  const renderSpicyLevel = () => {
    return "🌶️".repeat(Math.min(spicyLevel, 3));
  };

  // Format price safely
  const formatPrice = () => {
    if (typeof price !== "number") return "$0.00";
    return `$${price.toFixed(2)}`;
  };

  return (
    <TouchableOpacity style={styles.outerContainer} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl || "https://picsum.photos/400/300" }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.topContainer}>
            {isVegetarian && (
              <View style={styles.vegBadge}>
                <Text style={styles.vegBadgeText}>🥬 Veg</Text>
              </View>
            )}
            <Pressable
              onPress={toggleLike}
              style={[styles.heartButton, isLiked && styles.liked]}
            >
              <Text style={styles.heartText}>{isLiked ? "❤️" : "🤍"}</Text>
            </Pressable>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatPrice()}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.titleRow}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {spicyLevel > 0 && (
              <Text style={styles.spicyIndicator}>{renderSpicyLevel()}</Text>
            )}
          </View>

          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statIcon}>⭐</Text>
              <Text style={styles.statText}>4.8</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statIcon}>⏱️</Text>
              <Text style={styles.statText}>{preparationTime}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statIcon}>👥</Text>
              <Text style={styles.statText}>1-2 persons</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  container: {
    borderRadius: 16,
    overflow: "hidden",
  },
  imageContainer: {
    height: 180,
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  topContainer: {
    position: "absolute",
    top: 12,
    left: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vegBadge: {
    backgroundColor: "rgba(46, 204, 113, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  vegBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  heartButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  liked: {
    backgroundColor: "rgba(255,192,203,0.9)",
  },
  heartText: {
    fontSize: 16,
  },
  priceContainer: {
    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  spicyIndicator: {
    marginLeft: 8,
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  statText: {
    fontSize: 14,
    color: "#666",
  },
  statDivider: {
    width: 1,
    height: 12,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 12,
  },
});

export default Tile;
