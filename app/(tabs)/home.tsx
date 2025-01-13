import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import Slideshow from "@/components/Slideshow/Slideshow";
import Tile from "@/components/UtilityComponents/Tile";
import { hotels } from "@/testData/testDb";

interface TileData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface CombinedData {
  id: string | number;
  type: "slideshow" | "search" | "tile";
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function HomeScreen() {
  const images = ["slide1", "slide2", "slide3"];

const tilesData: TileData[] = hotels


  const combinedData: CombinedData[] = [
    { id: "slideshow", type: "slideshow" },
    { id: "search", type: "search" },
    ...tilesData.map((tile) => ({
      ...tile,
      type: "tile" as const,
    })),
  ];

  const renderItem: ListRenderItem<CombinedData> = ({ item }) => {
    if (item.type === "slideshow") {
      return <Slideshow texts={images} />;
    } else if (item.type === "search") {
      return (
        <View style={[styles.row, styles.space]}>
          <TextInput style={styles.searchBox} placeholder="Search..." />
        </View>
      );
    } else if (item.type === "tile") {
      return (
        <Tile
        id={item.id}
          title={item.title!}
          description={item.description!}
          imageUrl={item.imageUrl!}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.scrollContainer}>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListPadding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff", // Optional: Set background color for the screen
   
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: "#f9f9f9", // Optional: Light background for the input
  },
  space: {
    marginBottom: 16,
  },
  flatListPadding: {
    
    paddingBottom: 20,
  },
});
