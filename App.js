/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { Notification, Receipt21, Clock, Message, SearchNormal, Like1, ArrowRight2 } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
export default function App() {
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
      <View style={{ paddingHorizontal: 24 }}>
        <View style={styles.searchContainer}>
          <SearchNormal color={colors.black()} variant="Linear" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Cari..."
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>


        </ScrollView>
      </View>
      <ListBlog />

    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 100 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1642378327252-8c8121abaf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Tari Tradisi
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 100 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Tari Modern
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 100 }}
              source={{
                uri: 'https://i.pinimg.com/564x/27/e2/2c/27e22c7a2a1f3bb0ec6bb9c928037eb5.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Tari Kreasi
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 100 }}
              source={{
                uri: 'https://i.pinimg.com/564x/74/c2/da/74c2da23e1c11ba9223a8e1b148f0f5e.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Musik
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 100 }}
              source={{
                uri: 'https://i.pinimg.com/564x/da/19/9c/da199cd228817dbd808cad94c6793609.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Kostum Tarian
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
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
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
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
                    Tranding
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
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
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
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
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
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
                  <Text style={itemVertical.cardCategory}>Show</Text>
                  <Text style={itemVertical.cardTitle}>
                    Jadwal Tari Ginarist
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Contact for more</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
              </View>
            </View>
          </View>
        </View>
        <ListSeniRupa />

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
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
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
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
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
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
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
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
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
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
              <Like1 color={colors.white()} variant="Linear" size={24} />
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
    margin: 8,
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
    fontFamily: fontType['Pjs-Bold'],
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
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

