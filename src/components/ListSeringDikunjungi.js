import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Heart, Receipt21 } from 'iconsax-react-native';
const PalingSeringDikunjungi = ({ item }) => {
  return (
    <View style={{ ...itemHorizontal.cardItem }}>
      <ImageBackground
        style={itemHorizontal.cardImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
        source={{
          uri: item.image,
        }}>
        <View style={itemHorizontal.cardContent}>
          <View style={itemHorizontal.cardInfo}>
            <Text style={itemHorizontal.cardTitle}>
              {item.title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const ListPalingSeringDikunjungi = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <PalingSeringDikunjungi
        item={item}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListPalingSeringDikunjungi;
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontSize: 12,
    color: 'white',
  },
  cardText: {
    fontSize: 10,
    color: 'white',
  },
  cardIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});