import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
//@ts-expect-error
const CustomHeader = ({ onButton1Press, onButton2Press }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.rowContainer}>
        {/* Left Section with Deliver To and Select Location */}
        <View style={styles.leftSection}>
          <Text style={styles.deliver}>Deliver To</Text>
          <TouchableOpacity onPress={onButton1Press}>
            <Text style={styles.locText}>Select Location</Text>
          </TouchableOpacity>
        </View>

        {/* Right Section with Profile Avatar */}
        <TouchableOpacity style={styles.profileBtn} onPress={onButton2Press}>
          <Image
            source={{ uri: "https://shorturl.at/2rAUK" }} // Replace with profile image URL
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    backgroundColor: "white",
      elevation: 4, // For Android shadow
  shadowColor: "black", // For iOS shadow
  shadowOffset: { width: 0, height: 3 }, // Offset for iOS
  shadowOpacity: 0.75, // Opacity for iOS
  shadowRadius: 5, // Blur radius for iOS
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Ensure vertical alignment of items
  },
  leftSection: {
    flexDirection: "column",
    justifyContent: "center",
  },
  deliver: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  locText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
  },
  profileBtn: {
    width: 40,
    height: 40,
    borderRadius: 20, // Ensure circular shape
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ddd",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 20, // Circular image
  },
});

export default CustomHeader;
