import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Notification, Receipt21, Clock, Message, SearchNormal, Like1, ArrowRight2 } from 'iconsax-react-native';
import { KategoriTariList } from '../../../data';
import { ListKategoriTari } from '../../components';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GINARIST.Art</Text>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://templates.iqonic.design/sofbox-admin/sofbox-dashboard-html/html/images/user/1.jpg',
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 24, marginBottom: 10, }}>
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
      <ListBlog />

    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ListKategoriTari data={KategoriTariList} />
        <ListSeniRupa />
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/69/9a/0a/699a0a796a5a90f9d3c431e4cf565092.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Seni Rupa</Text>
                  <Text style={itemVertical.cardTitle}>
                    Properti Tari
                  </Text>
                </View>
              </View>

            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/e8/d4/16/e8d416dfac1a46318934be1867b9a915.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Terkini</Text>
                  <Text style={itemVertical.cardTitle}>
                    Trending
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/3d/d3/c2/3dd3c2ae80e73d79aab4f54b6d6717b0.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Budaya</Text>
                  <Text style={itemVertical.cardTitle}>
                    Galeri Tari
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={'rgb(128,128,128)'}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={'rgb(128,128,128)'}
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/2d/2a/6b/2d2a6bc9744a59b085477e090672fc4b.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>videos</Text>
                  <Text style={itemVertical.cardTitle}>Video Tarian</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/5f/b6/f0/5fb6f017a732294308015a7a2abb5000.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ gap: 5, width: '70%' }}>
                  <Text style={itemVertical.cardCategory}>Music</Text>
                  <Text style={itemVertical.cardTitle}>
                    Lagu Tarian Indonesia
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: 'rgba(0,0,255,0.1)',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'blue',
    fontSize: 10,

  },
  cardTitle: {
    fontSize: 14,

    color: 'black',
  },
  cardText: {
    fontSize: 15,

    color: 'blue',
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
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
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

const styles = StyleSheet.create({
  seniPopulerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSeniDaerah: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  textSeni: {
    fontSize: 20,
    marginRight: 8,

    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    marginLeft: 16, // Mengatur jarak antara notifikasi dan foto profil
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Membuat gambar profil berbentuk lingkaran
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
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  title: {
    fontSize: 20,

    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const ListSeniRupa = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>List Kota Beragam Budaya</Text>
        <ArrowRight2 color={'black'} variant="Linear" size={20} />
      </View>
      <ScrollView contentContainerStyle={listSeniRupa.scrollViewContent}>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/65/a6/02/65a6021abdc2b4bae40695ff91579bc6.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Malang</Text>
          </ImageBackground>
        </View>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/a1/71/9a/a1719a7765428eb512ff97a079ee2983.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Jakarta</Text>
          </ImageBackground>
        </View>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/97/6f/d7/976fd7a590c85a71522c09688f07e306.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Yogyakarta</Text>
          </ImageBackground>
        </View>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/0f/9a/75/0f9a75816dbd9b66ba59254eb83e16eb.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Bali</Text>
          </ImageBackground>
        </View>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/88/b5/96/88b596b8e9dad8dba2ddd12434da331c.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Makassar</Text>
          </ImageBackground>
        </View>
        <View style={listSeniRupa.card}>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/75/1c/ca/751cca81becef2cfddd186fcc623c48f.jpg',
            }}
            style={listSeniRupa.image}
          >
            <View style={listSeniRupa.cardIcon}>
              <Like1 color={'white'} variant="Linear" size={24} />
            </View>
            <Text style={listSeniRupa.cardTitle}>Kalimantan</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>

  );
};
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
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 5
  },
  title: {

    fontSize: 14,
    lineHeight: 18,
    color: 'grey',
  },
})

