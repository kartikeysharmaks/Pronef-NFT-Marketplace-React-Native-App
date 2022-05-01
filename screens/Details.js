import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import {
  HomeHeader,
  NFTCard,
  FocusedStatusBar,
  SubInfo,
  RectButton,
  CirleButton,
  DetailsDesc,
  DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CirleButton imgUrl={assets.left} handlePress={()=>navigation.goBack()} left={15} top={StatusBar.currentHeight + 10}/>
      <CirleButton imgUrl={assets.heart} handlePress={()=>navigation.goBack()} right={15} top={StatusBar.currentHeight + 10}/>
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo/>
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data}/>
              {data.bids.length > 0 && (
                <Text style={{fontSize:SIZES.font,fontFamily:FONTS.semiBold,color:COLORS.primary}}>
                  Current Bid
                </Text>
              )}

            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
