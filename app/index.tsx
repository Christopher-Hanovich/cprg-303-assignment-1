import React from "react";
import { Image, Text, View } from "react-native";
import AlertButton from "../components/alertButton";
import HomeCatList from "../components/homeCatList";

export default function Index() {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      
      <View
        style={{ flex: 6, backgroundColor: "lightblue", width: "100%" }}
      >
        <Image
        source={require  ("../assets/images/babyPic.jpg")}
        style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
      />
      </View>
      <View
        style={{ flex: 1, flexDirection: "row",backgroundColor: "lightpink", width: "100%", justifyContent: "space-between" }}
      >
        <View
          style={{ flex: 1, backgroundColor: "purple", marginRight: "20%" }}
        >
          <Text> Name </Text>
          <Text> Age </Text>
        </View>
        <View
          style={{ flex: 1, backgroundColor: "blue", marginLeft: "20%", flexDirection: "row", justifyContent: "center" }}
        >
          <View style={{ flex: 1, backgroundColor: "cyan"}}>
          </View>
          <View style={{ flex: 1, backgroundColor: "navy" }}>
          </View>
          </View>
      </View>
      <View style={{ flex: 8, width: "100%" }}>
        <HomeCatList />
        </View>
      <View
        style={{ flex: 2, backgroundColor: "red", width: "100%", flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text> Add new category button here </Text>

      </View>
      <AlertButton title="Alert" message="Alert Button pressed." />
     
    </View>
      )
}