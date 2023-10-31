import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
const ExploreCircle = ({ item, onPress }) => {
  return (
    <View style={{ ...itemHorizontal.cardItem }}>
      <TouchableOpacity>
        <ImageBackground
          style={itemHorizontal.cardImage}
          resizeMode="cover"
          imageStyle={{
            borderRadius: 100,
            borderColor: 'black',
            borderWidth: 2,
          }}
          source={{
            uri: item.image,
          }}>
          <View style={itemHorizontal.cardContent}>
            <View style={itemHorizontal.cardInfo}>
              <Text style={itemHorizontal.cardTitle}>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const ListExploreCircle = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <ExploreCircle
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
export default ListExploreCircle;
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

    fontSize: 14,
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