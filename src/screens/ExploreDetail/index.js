import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import { ArrowLeft, Like1, Receipt21, Message, Share, More, Heart } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { ExploreTrendingList } from '../../../data';

const scrollY = useRef(new Animated.Value(0)).current;
const diffClampY = Animated.diffClamp(scrollY, 0, 52);
const headerY = diffClampY.interpolate({
  inputRange: [0, 52],
  outputRange: [0, -52],
});
const bottomBarY = diffClampY.interpolate({
  inputRange: [0, 52],
  outputRange: [0, 52],
});

const ExploreDetail = ({ route }) => {
  const { blogId } = route.params;
  const [iconStates, setIconStates] = useState({
    liked: { variant: 'Linear', color: 'black' },
    bookmarked: { variant: 'Linear', color: 'black' },
  });
  const selectedBlog = ExploreTrendingList.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? 'gold'
            : 'black',
      },
    }));
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { transform: [{ translateY: headerY }] }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ backgroundColor: 'black', borderRadius: 50, padding: 10 }}>
            <ArrowLeft
              color={'white'}
              variant="Linear"
              size={24}
            />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
          <View style={{ backgroundColor: 'black', borderRadius: 50, padding: 10 }}>
            <More
              color={'white'}
              variant="Linear"
              size={24}
            />
          </View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingTop: 0,
          paddingBottom: 54,
        }}>
        <Image
          style={styles.image}
          source={{
            uri: selectedBlog.image,
          }}
          resizeMode={'cover'} />
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text style={{ color: 'white', backgroundColor: 'grey', borderRadius: 10, padding: 10, }}>{selectedBlog.category}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 15,
          }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Upload By : </Text>
            <Text style={{ color: 'black' }}>{selectedBlog.uploadBy}</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.title}>{selectedBlog.title}</Text>
            <Text style={styles.content}>{selectedBlog.content}</Text>
          </View>
        </View>
      </Animated.ScrollView>
      <Animated.View style={[styles.bottomBar, { transform: [{ translateY: bottomBarY }] }]}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => toggleIcon('liked')}>
            <Heart
              color={iconStates.liked.color}
              variant={iconStates.liked.variant}
              size={24}
            />
          </TouchableOpacity>
          <Text style={styles.info}>
            10
          </Text>
        </View>
        <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
          <Receipt21
            color={iconStates.bookmarked.color}
            variant={iconStates.bookmarked.variant}
            size={24}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
export default ExploreDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: 'auto',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  info: {
    color: 'black',

    fontSize: 12,
  },
  category: {
    color: 'gold',

    fontSize: 12,
  },
  date: {
    color: 'black',

    fontSize: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  content: {
    color: 'black',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15,
  },
});