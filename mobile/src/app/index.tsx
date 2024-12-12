import { Welcome } from "@/components/welcome"
import { View, Text } from "react-native"

export default function Index() {
  return (
    <View 
      style={{ 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Welcome />
      
    </View>
  )
}