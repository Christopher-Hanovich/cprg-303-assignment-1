import React from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AlertButton from "../components/alertButton";
import HomeCatList from "../components/homeCatList";

export default function Index() {
  const handleAddCategory = () => {
    Alert.alert("Add Category", "Add new activity category");
  };

  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {/* Header Image */}
      <View style={{ flex: 6, width: "100%" }}>
        <Image
          source={require("../assets/images/babyPic.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        />
      </View>

      {/* Info Bar */}
      <View style={{ 
        flex: 1, 
        flexDirection: "row", 
        backgroundColor: "lightpink", 
        width: "100%", 
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
      }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Name: Parker</Text>
          <Text style={{ fontSize: 14 }}>Age: 1 month</Text>
        </View>
        <View style={{ 
          flex: 1, 
          flexDirection: "row", 
          justifyContent: "center" 
        }}>
          <View style={{ flex: 1, backgroundColor: "cyan"}}></View>
          <View style={{ flex: 1, backgroundColor: "navy" }}></View>
        </View>
      </View>

      {/* Category List */}
      <View style={{ flex: 8, width: "100%" }}>
        <HomeCatList />
      </View>

      {/* Add Category Button */}
      <View style={{ 
        flex: 2, 
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}>
        <TouchableOpacity 
          style={{
            backgroundColor: "#007AFF",
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
          }}
          onPress={handleAddCategory}
        >
          <MaterialCommunityIcons name="plus" size={20} color="white" />
          <Text style={{ 
            color: "white", 
            fontSize: 16, 
            fontWeight: "bold",
            marginLeft: 8 
          }}>
            Add new category
          </Text>
        </TouchableOpacity>
      </View>

      {/* Alert Button */}
      <AlertButton title="Alert" message="Alert Button pressed." />
    </View>
  );
}