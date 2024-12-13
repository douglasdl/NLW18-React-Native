import { Alert, ScrollView, StatusBar, Text, View } from "react-native"
import { router, useLocalSearchParams, Redirect } from "expo-router"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Loading } from "@/components/loading"
import { Cover } from "@/components/market/cover"
import { Details, PropsDetails } from "@/components/market/details"
import { Coupon } from "@/components/market/cupom"

type DataProps = PropsDetails & {
  cover: string
}

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>()
  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [couponIsFetching, setCouponIsFetching] = useState(false)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        {
          text: "OK",
          onPress: () => router.back()
        }
      ])
    }
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id])

  if(isLoading) {
    return <Loading />
  }

  if(!data) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>
    </View>
  )
}