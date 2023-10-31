import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Heart, Receipt21 } from 'iconsax-react-native';
const MacamTarian = ({ item, variant, onPress }) => {
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
const ListMacamTarian = ({ data }) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({ item }) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <MacamTarian
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
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
export default ListMacamTarian;
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 100,
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