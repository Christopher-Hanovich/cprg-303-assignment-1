import { StyleSheet, Text, View } from "react-native";

export default function homeCategory({ category }) {
  const { icon, time, desc, color } = category;
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      margin: 10,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      width: "100%",
    },
    //Add style for to change icon color dynamically
    timeText: { fontSize: 16, fontWeight: "bold", color: color },
    descText: { fontSize: 14, color: "gray" },
  });
  return (
    <View style={Styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "left" }}>
        <View style={{ flex: 1 }}>{icon}</View>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <Text style={Styles.timeText}>{time}</Text>
          <Text style={Styles.descText}>{desc}</Text>
        </View>
      </View>
      <View
        style={{ flex: 1, alignItems: "right", justifyContent: "flex-end" }}
      >
        <Text style={{ fontSize: 16, color: color, textAlign: "right" }}>
          Clock in here
        </Text>
      </View>
    </View>
  );
}
