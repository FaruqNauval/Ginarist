import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";
import { ArrowLeft, Add, AddSquare } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
const AddBlogForm = () => {
  const [loading, setLoading] = useState(false);
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`blogimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('blog').add({
        image: url,
        category: blogData.category,
        content: blogData.content,
        title: blogData.title,
        uploadBy: 'Admin',
      });
      setLoading(false);
      console.log('Blog added!');
      navigation.navigate('Explore');
    } catch (error) {
      console.log(error);
    }
  };
  // const handleUpload = async () => {
  //   setLoading(true);
  //   try {
  //     await axios.post('https://656d4f1ebcc5618d3c2305fa.mockapi.io/GinaristArt/explore', {
  //       image,
  //       category: blogData.category,
  //       content: blogData.content,
  //       title: blogData.title,
  //     })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     setLoading(false);
  //     navigation.navigate('Explore');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const dataCategory = [
    { id: 1, name: "Modern" },
    { id: 2, name: "Tradisi" },
    { id: 3, name: "Musik" },
    { id: 4, name: "Busana" },
    { id: 5, name: "Properti" },
    { id: 6, name: "Sinopsis" },
    { id: 7, name: "Video" },
    { id: 8, name: "Deskripsi" },
  ];
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: {},
    totalLikes: 0,
    totalComments: 0,
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={"black"} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Tambahkan Tarian</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Judul"
            value={blogData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={"grey"}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="Keterangan "
            value={blogData.content}
            onChangeText={(text) => handleChange("content", text)}
            placeholderTextColor={"grey"}
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,

              color: "grey",
            }}
          >
            Katagori
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
                  ? "black"
                  : "grey";
              const color =
                item.id === blogData.category.id
                  ? "white"
                  : "white";
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange("category", { id: item.id, name: item.name })
                  }
                  style={[category.item, { backgroundColor: bgColor }]}
                >
                  <Text style={[category.name, { color: color }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {image ? (
          <View style={{ position: 'relative' }}>
            <Image
              style={{ width: '100%', height: 127, borderRadius: 5 }}
              source={{
                uri: image,
              }}
              resizeMode={'cover'}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={'white'}
                style={{ transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={'rgba(128, 128, 128, 0.6)'} variant="Linear" size={42} />
              <Text
                style={{
                  fontSize: 12,
                  color: 'rgba(128, 128, 128, 0.6)',
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={'blue'} />
        </View>
      )}

    </View>
  );
};

export default AddBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {

    fontSize: 16,
    color: "black",
  },
  bottomBar: {
    backgroundColor: "white",
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,

    color: "white",
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "grey",
  },
  title: {
    fontSize: 16,

    color: "black",
    padding: 0,
  },
  content: {
    fontSize: 12,

    color: "black",
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,

    color: "grey",
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,

  },
});