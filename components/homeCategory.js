import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeCategory({ category }) {
  const { icon, time, desc, color } = category;
  
  // Function to get Material icon names with better matching
  const getIconName = (iconType) => {
    switch(iconType) {
      case 'bottle':
        return 'bottle-tonic';
      case 'diaper':
        return 'baby-face-outline';
      case 'bassinet':
        return 'sleep';
      case 'breast pump':
        return 'water';
      default:
        return 'plus-circle';
    }
  };

  // Get better colors for each category
  const getIconColor = (iconType) => {
    switch(iconType) {
      case 'bottle':
        return '#FF6B35'; // Orange
      case 'diaper':
        return '#4A90E2'; // Blue
      case 'bassinet':
        return '#34C759'; // Green
      case 'breast pump':
        return '#AF52DE'; // Purple
      default:
        return '#8E8E93'; // Gray
    }
  };

  const iconColor = getIconColor(icon);

  const Styles = StyleSheet.create({
    container: {
      flexDirection: "row",
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
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: `${iconColor}20`,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    textContainer: {
      flex: 1,
    },
    descText: { 
      fontSize: 16, 
      color: "#1C1C1E",
      fontWeight: "600",
      marginBottom: 4,
    },
    clockContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F2F2F7",
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    clockText: {
      fontSize: 13, 
      color: "#8E8E93", 
      marginLeft: 4,
      fontWeight: "500",
    }
  });

  return (
    <Pressable 
      style={Styles.container}
      android_ripple={{ color: '#f0f0f0' }}
    >
      <View style={Styles.iconContainer}>
        <MaterialCommunityIcons 
          name={getIconName(icon)} 
          size={24} 
          color={iconColor} 
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.descText}>{desc}</Text>
    <Pressable style={Styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "left" }}>
        <View style={{ flex: 1 }}>{icon}</View>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <Text style={Styles.timeText}>{time}</Text>
          <Text style={Styles.descText}>{desc}</Text>
        </View>
      </View>
      <View style={Styles.clockContainer}>
        <MaterialCommunityIcons name="clock-outline" size={14} color="#8E8E93" />
        <Text style={Styles.clockText}>{time}</Text>
      </View>
    </Pressable>
  );
}