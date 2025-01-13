import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import { food, addons } from "@/testData/testDb";
import { useLocalSearchParams } from "expo-router";
import AddonTile from "@/components/UtilityComponents/AddonTile";
import { CartSummary } from "../(tabs)/cart";
import { MaterialIcons } from "@expo/vector-icons";

type FoodItem = {
  id: number;
  name: string;
  addons: number[]; // Array of addon IDs
};

export default function AddonPage() {
  const params = useLocalSearchParams();
  const id = params.id as string | undefined;

  if (!id || isNaN(parseInt(id, 10))) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <MaterialIcons name="error-outline" size={48} color="#FF6B6B" />
        <Text style={styles.errorText}>Invalid food item ID</Text>
      </SafeAreaView>
    );
  }

  const foodId = parseInt(id, 10);
  const item = food.find((f1: FoodItem) => f1.id === foodId);

  if (!item || !item.addons || item.addons.length === 0) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <MaterialIcons name="restaurant" size={48} color="#9E9E9E" />
        <Text style={styles.infoText}>No addons available for this item</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Customize Your Order</Text>
          <Text style={styles.headerSubtitle}>{item.name}</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Available Add-ons</Text>
          <View style={styles.addonsContainer}>
            {item.addons.map((addonId) => (
              <AddonTile key={addonId} id={addonId} />
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <CartSummary totalAmount={300} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  scrollView: {
    padding: 16,
    paddingBottom: 100, // Extra padding for bottom container
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  addonsContainer: {
    gap: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 12,
  },
  infoText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 12,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
