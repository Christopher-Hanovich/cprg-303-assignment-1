import { Button } from "react-native";
export default function alertButton({ title, message }) {
  const showAlert = () => {
    alert(message);
  };
  return <Button title={title} onPress={showAlert} />;
}
