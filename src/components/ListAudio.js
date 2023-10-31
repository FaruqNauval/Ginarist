import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Heart, Play, Receipt21 } from 'iconsax-react-native';
const ListAudio = ({ item }) => {
  return (
    <View style={{ backgroundColor: 'rgb(255, 231, 166)', padding: 10, borderRadius: 15, flexDirection: 'row', marginBottom: 10 }}>
      <Play variant='Linear' size={24} color='black' />
      <View style={{marginLeft: 10}}>
        <Text style={itemHorizontal.cardTitle}>
          {item.title}
        </Text>
        <Text style={itemHorizontal.cardText}>
          {item.pencipta}
        </Text>
      </View>
    </View>
  );
};
export default ListAudio;
const itemHorizontal = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 14,
    color: 'black',
  },
});