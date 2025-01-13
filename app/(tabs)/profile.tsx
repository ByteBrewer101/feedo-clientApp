//@ts-nocheck
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Settings Item Component
function SettingsItem({ icon, title, onPress, value }) {
  return (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <View style={styles.settingsItemLeft}>
        <MaterialIcons name={icon} size={24} color="#FF6B00" />
        <Text style={styles.settingsItemTitle}>{title}</Text>
      </View>
      <View style={styles.settingsItemRight}>
        {value && <Text style={styles.settingsItemValue}>{value}</Text>}
        <MaterialIcons name="chevron-right" size={24} color="#A0A0A0" />
      </View>
    </TouchableOpacity>
  );
}

// Main Profile Screen Component
function ProfileScreen() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    avatar: "https://shorturl.at/2rAUK",
  });

  function handleEditPhoto() {
    // Implement photo editing logic
    console.log("Edit photo");
  }

  function handleSettingPress(setting: string) {
    // Implement settings navigation logic
    console.log("Pressed:", setting);
  }

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: user.avatar }} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.editPhotoButton}
            onPress={handleEditPhoto}
          >
            <MaterialIcons name="camera-alt" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <SettingsItem
          icon="person"
          title="Edit Profile"
          onPress={() => handleSettingPress("profile")}
        />

        <SettingsItem
          icon="phone"
          title="Phone Number"
          value={user.phone}
          onPress={() => handleSettingPress("phone")}
        />

        <SettingsItem
          icon="lock"
          title="Change Password"
          onPress={() => handleSettingPress("password")}
        />

        <SettingsItem
          icon="notifications"
          title="Notifications"
          onPress={() => handleSettingPress("notifications")}
        />

        <SettingsItem
          icon="location-on"
          title="Delivery Addresses"
          onPress={() => handleSettingPress("addresses")}
        />

        <SettingsItem
          icon="payment"
          title="Payment Methods"
          onPress={() => handleSettingPress("payment")}
        />

        <SettingsItem
          icon="help"
          title="Help & Support"
          onPress={() => handleSettingPress("support")}
        />

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => handleSettingPress("logout")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editPhotoButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#FF6B00",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  userName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  settingsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsItemTitle: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
  settingsItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsItemValue: {
    fontSize: 14,
    color: "#666",
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: "#FF6B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
