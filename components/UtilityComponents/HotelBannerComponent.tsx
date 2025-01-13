import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const HotelBanner = ({ hotel }: { hotel: any }) => (
  <View style={tileStyles.container}>
    <View style={tileStyles.logoContainer} >
      <Image source={{uri:hotel.imageUrl}} style={tileStyles.logo} />

  

    </View>
    
    <View style={tileStyles.detailsContainer}>
      <Text style={tileStyles.title}>{hotel.title}</Text>
      <Text style={tileStyles.description}>{hotel.description}</Text>
    </View>
  </View>
);

const tileStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    // marginVertical: 10,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
