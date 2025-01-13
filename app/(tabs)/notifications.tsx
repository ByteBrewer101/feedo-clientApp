//@ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Sample data structure - Replace with your actual data
const SAMPLE_NOTIFICATIONS = {
  activeOrders: [
    {
      id: "ao1",
      restaurantName: "Burger Palace",
      orderNumber: "#FD4578",
      status: "On the way",
      time: "10 mins away",
      price: "$24.50",
      items: "2x Burger, 1x Fries",
    },
    {
      id: "ao2",
      restaurantName: "Pizza Hub",
      orderNumber: "#FD4579",
      status: "Preparing",
      time: "Ready in 15 mins",
      price: "$32.80",
      items: "1x Large Pizza, 2x Coke",
    },
  ],
  previousOrders: [
    {
      id: "po1",
      restaurantName: "Taco Express",
      orderNumber: "#FD4570",
      status: "Delivered",
      time: "Yesterday, 8:30 PM",
      price: "$18.90",
      items: "3x Tacos, 1x Nachos",
    },
    {
      id: "po2",
      restaurantName: "Sushi Master",
      orderNumber: "#FD4565",
      status: "Delivered",
      time: "Yesterday, 2:15 PM",
      price: "$45.60",
      items: "2x California Roll, 1x Miso Soup",
    },
    {
      id: "po3",
      restaurantName: "Thai Delight",
      orderNumber: "#FD4562",
      status: "Delivered",
      time: "2 days ago",
      price: "$29.90",
      items: "1x Pad Thai, 1x Green Curry",
    },
  ],
};

function NotificationCard({ order, isActive }) {
  return (
    <TouchableOpacity style={[styles.card, isActive && styles.activeCard]}>
      <View style={styles.cardHeader}>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{order.restaurantName}</Text>
          <Text style={styles.orderNumber}>{order.orderNumber}</Text>
        </View>
        <Text style={[styles.price, isActive && styles.activeText]}>
          {order.price}
        </Text>
      </View>

      <View style={styles.orderInfo}>
        <Text style={styles.items}>{order.items}</Text>
        <View style={styles.statusContainer}>
          {isActive ? (
            <MaterialIcons name="delivery-dining" size={20} color="#FF6B00" />
          ) : (
            <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
          )}
          <Text
            style={[
              styles.status,
              isActive ? styles.activeStatus : styles.completedStatus,
            ]}
          >
            {order.status}
          </Text>
        </View>
      </View>

      <Text style={[styles.time, isActive && styles.activeTime]}>
        {order.time}
      </Text>
    </TouchableOpacity>
  );
}

function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Active Orders Section */}
      {SAMPLE_NOTIFICATIONS.activeOrders.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Orders</Text>
          {SAMPLE_NOTIFICATIONS.activeOrders.map((order) => (
            <NotificationCard key={order.id} order={order} isActive={true} />
          ))}
        </View>
      )}

      {/* Previous Orders Section */}
      {SAMPLE_NOTIFICATIONS.previousOrders.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Previous Orders</Text>
          {SAMPLE_NOTIFICATIONS.previousOrders.map((order) => (
            <NotificationCard key={order.id} order={order} isActive={false} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  activeCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#FF6B00",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  orderNumber: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  activeText: {
    color: "#FF6B00",
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  items: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  activeStatus: {
    color: "#FF6B00",
  },
  completedStatus: {
    color: "#4CAF50",
  },
  time: {
    fontSize: 13,
    color: "#999",
  },
  activeTime: {
    color: "#FF6B00",
    fontWeight: "500",
  },
});

export default NotificationsScreen;
