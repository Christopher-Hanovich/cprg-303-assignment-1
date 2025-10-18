import { View } from "react-native";
import categories from "./categories.json";
import HomeCategory from "./homeCategory";
export default function homeCatList() {
  return (
    <View>
      {categories.map((category, index) => (
        <HomeCategory key={index} category={category} />
      ))}
    </View>
  );
}
