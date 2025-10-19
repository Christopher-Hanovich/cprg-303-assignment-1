import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
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
      <View
        style={{ flex: 1, flexDirection: "row",backgroundColor: "#CA719D", width: "100%", justifyContent: "space-between" }}
      >
        <View
          style={{ flex: 1, backgroundColor: "#CA719D", marginRight: "20%" }}
        >
          <Text style= {{color: "white", fontWeight: "bold"}}> Name </Text>
          <Text style= {{color: "white"}}> Age </Text>
        </View>
        <View
          style={{ flex: 1, marginLeft: "20%", flexDirection: "row", justifyContent: "center" }}
        >
          <View style={{ flex: 1, backgroundColor: "#CA719D"}}>
          </View>
          <View style={{ flex: 1, backgroundColor: "#CA719D" }}>
          </View>
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
      }}>
        <TouchableOpacity 
          style={{
            width: "92%",
            marginHorizontal: 16,
            marginVertical: 8,
            padding: 16,
            backgroundColor: "white",
            borderRadius: 12,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
          onPress={handleAddCategory}
        >
          <MaterialCommunityIcons name="plus" size={20} />
          <Text style={{ 

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