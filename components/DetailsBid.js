import { View, Text , Image} from 'react-native';
import React from 'react';
import { EthPrice, NFTTitle } from "./SubInfo";
import { SHADOWS, COLORS, FONTS, SIZES } from "../constants";

const DetailsBid = ({bid}) => {
  return (
    <View style={{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:SIZES.base,
    paddingHorizontal:SIZES.base*2,
    }}>
      <Image 
      source={bid.image}
      resizeMode="contain"
      style={{width:48,height:48}}
      />
      <View>
        <Text style={{fontFamily:FONTS.semiBold,color:COLORS.primary,fontSize:SIZES.small}}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{fontFamily:FONTS.regular,color:COLORS.primary,fontSize:SIZES.small-2,marginTop:3}}>
         {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid;