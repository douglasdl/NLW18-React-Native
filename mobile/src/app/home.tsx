import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

const currentLocationSample = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494
  // latitude: 34.85225904895956, 
  // longitude: 135.68285025483374
}

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState(currentLocationSample);
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return
      }

      const { data } = await api.get("/markets/category/" + category)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if(granted) {
        const location = await Location.getCurrentPositionAsync();
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        })
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Permission to access location was denied');
      
    }  
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  
  useEffect(() => {
    getCurrentLocation()
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <MapView style={{ flex: 1 }} 
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}
      >
        <Marker
          identifier="currnt"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
          }}
          image={require("@/assets/location.png")}
        />
        {
          markets.map(( item ) => (
            <Marker 
              key={item.id}
              identifier={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
              image={require("@/assets/pin.png")}
            >
              <Callout>
                <View>
                  <Text 
                    style={{ 
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.medium
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text 
                    style={{
                      fontSize: 12,
                      color: colors.gray[600],
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </Callout>  
            </Marker>
          ))
        }
      </MapView>

      <Places data={markets} />
    </View>
  )
}