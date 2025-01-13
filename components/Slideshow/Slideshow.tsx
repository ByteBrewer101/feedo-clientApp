import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from "react-native";

// Define a type for the image prop
interface SlideshowProps {
  texts: string[];
}

const { width: screenWidth } = Dimensions.get("window");

const Slideshow: React.FC<SlideshowProps> = ({ texts }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handle scroll events to update the current slide index
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(
      contentOffsetX / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentIndex(index);
  };

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({ x: index * screenWidth, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* ScrollView for the slides */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}
      >
        {texts.map((text, index) => (
          <View key={index} style={styles.slideOuter}>
            <TouchableOpacity style={styles.slideInner}>
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Dots for each slide */}
      <View style={styles.dotsContainer}>
        {texts.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
            <View
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  slideOuter: {
    width: screenWidth,
    height: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  slideInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 20,
    left: "20%",
    transform: [{ translateX: -50 }],
    flexDirection: "row",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc", // Inactive dot color
    marginHorizontal: 5,
   },
   activeDot:{
     width: 30, // Width of active dot (capsule)
     height:10, // Height of active dot (capsule)
     borderRadius:5, // Rounded corners for capsule effect
     backgroundColor:"#fff", // Active dot color
   },
   inactiveDot:{
     width:10, // Width of inactive dot
     height:10, // Height of inactive dot
   }
});

export default Slideshow;
