import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Add, SearchNormal } from 'iconsax-react-native';
import { BlogList, BookmarkAudioList, BookmarkMacamTarianList, BookmarkPalingSering, KategoriTariList } from '../../../data';
import { ItemBookmark, ListAudio, ListKategoriTari, ListMacamTarian, ListSeringDikunjungi } from '../../components';
const Bookmark = () => {
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
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Macam - Macam Tarian</Text>
            <ListMacamTarian data={BookmarkMacamTarianList} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Paling Sering Dikunjungi</Text>
            <ListSeringDikunjungi data={BookmarkPalingSering} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Audio</Text>
            {BookmarkAudioList.map((item, index) => (
              <ListAudio item={item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    marginBottom: 10
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