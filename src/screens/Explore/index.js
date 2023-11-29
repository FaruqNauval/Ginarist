import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {ExploreTrendingList, KategoriTariList } from '../../../data';
import { ListExploreCircle } from '../../components';
import { AddCircle, Edit, Like1, SearchNormal, SearchNormal1 } from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();
const ListSeniRupa = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <ScrollView contentContainerStyle={listSeniRupa.scrollViewContent}>
        {ExploreTrendingList.map((item, index) => (
          <View key={index} style={listSeniRupa.card}>
            <TouchableOpacity onPress={()=>navigation.navigate('ExploreDetail', {blogId: item.id})}>
              <ImageBackground
                source={{
                  uri: item.image,
                }}
                style={listSeniRupa.image}
              >
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};
const Explore = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
          <View style={{ marginBottom: 10, }}>
            <View style={styles.searchContainer}>
              <SearchNormal color={'black'} variant="Linear" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Cari..."
                onChangeText={handleSearchPress}
                value={searchText}
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TouchableOpacity>
              <AddCircle variant='Linear' size={100} color='black' />
            </TouchableOpacity>
            <ListExploreCircle data={KategoriTariList} />
          </View>
          <Text style={styles.title}>Trending</Text>
          <ListSeniRupa />
        </View>
      </ScrollView>
      <TouchableOpacity
  style={styles.floatingButton}
  onPress={() => navigation.navigate("AddFeed")}
>
  <Edit color={"white"} variant="Linear" size={20} />
</TouchableOpacity>
    </View>
  );
};
export default Explore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor: "blue",
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    color: 'black',
    letterSpacing: -0.3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black'
  },
});
const listSeniRupa = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  card: {
    width: '48%', // 48% dari lebar layar untuk 2 kolom (dengan jarak di antara)
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200, // Tinggi gambar
  },
  cardTitle: {
    fontSize: 16,
    padding: 8,
    fontSize: 14,

    color: 'white',
    position: 'absolute',
    color: 'white',
    bottom: 10,
  },
  listCard: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,
  },
  cardIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 5,
    borderRadius: 20,
  }
});