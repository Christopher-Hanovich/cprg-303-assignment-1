import { StyleSheet, View } from "react-native";
import categories from "./categories.json";
import HomeCategory from "./homeCategory";
export default function homeCatList() {
  return (
    <View Style={Styles.container}>
      {categories.map((category, index) => (
        <HomeCategory key={index} category={category} />
      ))}
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    background: "red",
    color: "blue",
    width: "100%",
    justifyContent: "space-between",
  },
});
