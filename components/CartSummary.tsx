import { View,Text } from "react-native";
import { StyleSheet } from "react-native";


export const CartSummary = ({ totalAmount }: { totalAmount: number }) => (
  <View style={styles.summaryContainer}>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Subtotal:</Text>
      <Text style={styles.summaryValue}>${totalAmount.toFixed(2)}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Delivery Fee:</Text>
      <Text style={styles.summaryValue}>$2.99</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Tax:</Text>
      <Text style={styles.summaryValue}>
        ${(totalAmount * 0.08).toFixed(2)}
      </Text>
    </View>
    <View style={[styles.summaryRow, styles.totalRow]}>
      <Text style={styles.totalLabel}>Total:</Text>
      <Text style={styles.totalValue}>
        ${(totalAmount + 2.99 + totalAmount * 0.08).toFixed(2)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "flex-end", // Ensure the button stays at the bottom
  },
  scrollContainer: {
    padding: 10,
    flexGrow: 1, // Ensure the scrollview content expands to fill available space
    paddingBottom: 80, // Add padding at the bottom to leave space for the button
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
  },
  bottomContainer: {
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius:20
  },
  summaryContainer: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    color: "#333",
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  orderButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#ff6b00",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
